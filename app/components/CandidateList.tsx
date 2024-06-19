"use client";

import { Icon } from "@iconify/react";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import React, {
  MouseEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useLongPress } from "@uidotdev/usehooks";
import classNames from "classnames";
import Image from "next/image";

import {
  INTERVIEW_GIVEN,
  FITMENT_PASSED,
  SELECTION_STATUS_COLOR,
  SELECTION_STATUS_LABEL,
  FITMENT_FAILED,
  INVITE_SENT,
} from "@/app/lib/constants";
import { CandidateInterface } from "@/types/auth";

import CandidateFilterDropdown from "./CandidateFilterDropdown";
import { notify } from "../helpers/NotificationHelper";
import { useUI } from "../contextApi/UIContext";
import { SendInviteBodyType } from "@/types/candidate";
import { sendEmailInviteToCandidate } from "../serverActions/candidate";

type CandidateListType = {
  list: CandidateInterface[];
  flowType?: "ALL_WEB" | "ALL_WA" | "WA_WEB";
  // query?: string;
};

function CandidateList(props: CandidateListType) {
  console.log({ props });
  const { list, flowType } = props;
  const path = usePathname();
  const params = useParams();
  const { startLoading, stopLoading } = useUI();
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  const { push } = useRouter();

  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);
  console.log({ selectedUsers });
  const [isCheckboxShown, setShowCheckbox] = React.useState(false);

  const HideInviteIcon = [
    INTERVIEW_GIVEN,
    FITMENT_FAILED,
    FITMENT_PASSED,
    INVITE_SENT,
  ];

  const attrs = useLongPress(
    (e) => {
      setShowCheckbox(true);
      const userId = ((e.target as HTMLElement)?.offsetParent as HTMLElement)
        ?.dataset.userid;

      if (!isNaN(Number(userId))) {
        handleUserSelect(Number(userId));
      } else {
        console.error("Invalid user ID:", userId);
      }
    },
    {
      onStart: (event) => console.log("Press started"),
      onFinish: (event) => console.log("Press Finished"),
      onCancel: (event) => console.log("Press cancelled"),
      threshold: 500,
    }
  );

  const filteredCandidateList = useMemo(() => {
    if (!query || query?.length < 3) return list; // If search value is empty or less than 3 characters, return the original candidates array.

    const lowerCaseSearchValue = query?.toLowerCase();
    const searchTerms = lowerCaseSearchValue?.split(" ");

    return list.filter((candidate) => {
      // Check if any part of the full name, first name, or last name matches the search terms
      return searchTerms.every((term) => {
        return (
          candidate.first_name.toLowerCase().includes(term) ||
          candidate.last_name.toLowerCase().includes(term) ||
          candidate.email.toLowerCase().includes(term)
        );
      });
    });
  }, [query, list]);

  const handleUserSelect = useCallback((userId: number) => {
    console.log({ userId });
    setSelectedUsers((prevSelectedUsers) =>
      prevSelectedUsers.includes(userId)
        ? Array.from(new Set(prevSelectedUsers.filter((id) => id !== userId)))
        : Array.from(new Set(prevSelectedUsers.concat([userId])))
    );
  }, []);

  const handleSelectAll = useCallback(() => {
    setShowCheckbox(true);
    const allItemIds = filteredCandidateList?.map((item) => +item.id);
    setSelectedUsers(allItemIds);
  }, [filteredCandidateList]);

  const handleDeselectAll = () => {
    setSelectedUsers([]);
  };

  const isAllSelectedMemoized = useMemo(() => {
    return (
      selectedUsers.length > 0 &&
      selectedUsers.length === filteredCandidateList?.length
    );
  }, [selectedUsers, filteredCandidateList]);

  const selectInvitedCandidates = useCallback(async () => {
    const usersToInvite = filteredCandidateList
      ?.filter((user) => user.was_invite_sent)
      .map((user) => +user.id);

    setSelectedUsers((prevSelectedUsers) =>
      Array.from(new Set(prevSelectedUsers.concat(usersToInvite)))
    );
  }, [filteredCandidateList]);

  const deSelectInvitedCandidates = useCallback(() => {
    const invitedUsersIds = filteredCandidateList
      ?.filter((user) => user.was_invite_sent)
      .map((user) => +user.id);

    const updatedSelectedUsers = selectedUsers.filter(
      (userId) => !invitedUsersIds.includes(userId)
    );

    setSelectedUsers(Array.from(new Set(updatedSelectedUsers)));
  }, [filteredCandidateList, selectedUsers]);

  const selectUnInvitedCandidates = useCallback(async () => {
    const usersToInvite = filteredCandidateList
      ?.filter((user) => !user.was_invite_sent)
      .map((user) => +user.id);

    setSelectedUsers((prevSelectedUsers) =>
      Array.from(new Set(prevSelectedUsers.concat(usersToInvite)))
    );
  }, [filteredCandidateList]);

  const deSelectUninvitedCandidates = useCallback(() => {
    // Filter the list to get IDs of users who have NOT been invited
    const unInvitedUsersIds = filteredCandidateList
      ?.filter((user) => !user.was_invite_sent)
      .map((user) => +user.id);

    // Filter the selectedUsers to remove those who are in the unInvitedUsersIds array
    const updatedSelectedUsers = selectedUsers.filter(
      (userId) => !unInvitedUsersIds.includes(userId)
    );

    // setSelectedUsers(updatedSelectedUsers);
    setSelectedUsers(Array.from(new Set(updatedSelectedUsers)));
  }, [filteredCandidateList, selectedUsers]);

  const usersNeedToBeInvited = useMemo(() => {
    const usersToInvite = filteredCandidateList
      ?.filter(
        (user) => selectedUsers.includes(+user.id) && !user.was_invite_sent
      )
      .map((user) => +user.id);
    return usersToInvite;
  }, [selectedUsers, filteredCandidateList]);

  const resetFilterHandler = useCallback(() => {
    setShowCheckbox(false);
    setSelectedUsers([]);
  }, []);

  console.log({ usersNeedToBeInvited });
  const handleBulkInvitation = useCallback(async () => {
    try {
      startLoading();

      if (usersNeedToBeInvited.length > 0) {
        const reqBody: SendInviteBodyType = {
          job_posting_id: +params.id,
          candidate_ids: usersNeedToBeInvited,
          flowType: flowType,
        };
        await sendEmailInviteToCandidate(reqBody);
        notify({
          type: "success",
          message: `invitation send to ${usersNeedToBeInvited.length} candidates`,
        });
      } else {
        notify({
          type: "error",
          message: "please select at leaset one candidate",
        });
      }
    } catch (error) {
      notify({
        type: "error",
        message: "Oops something went wrong.",
      });
    } finally {
      stopLoading();
    }
  }, [usersNeedToBeInvited, params.id]);

  console.log("List", list);

  console.log({ selectedUsers });

  const navigateToCandidatePage = (id: number) => {
    // TODO: remove in future when refactoring
    // dispatch(startLoading());
    push(`${path}/candidate/${id}`);
  };

  const sendInviteHandler = async (
    e: MouseEvent<HTMLDivElement>,
    id: number,
    mobile_no: string
  ) => {
    e.stopPropagation(); // Prevent event propagation
    try {
      if (flowType !== "ALL_WEB" && !mobile_no) {
        notify({
          type: "error",
          message:
            "Candidate Mobile number is required for current interview flow",
        });
        return;
      }
      startLoading();
      const reqBody: SendInviteBodyType = {
        job_posting_id: +params.id,
        candidate_ids: [id],
        flowType: flowType,
      };
      await sendEmailInviteToCandidate(reqBody);

      notify({
        type: "success",
        message:
          "Invite mail will be sent shortly after system has processed the information",
      });
    } catch (error) {
      notify({
        type: "error",
        message: "something went wrong while sending the invite",
      });
    } finally {
      stopLoading();
    }
  };

  useEffect(() => {
    if (selectedUsers.length) {
      setShowCheckbox(true);
    }
  }, [selectedUsers]);

  console.log({ filteredCandidateList });
  if (filteredCandidateList?.length === 0) {
    return (
      <>
        <div className="h-20 flex-1 py-10 text-center text-secondary">
          <p className="text-secondaryBlack">No Candidate found</p>
        </div>
      </>
    );
  }

  return (
    <>
      {isCheckboxShown && (
        <CandidateFilterDropdown
          isAllSelected={isAllSelectedMemoized}
          selectAll={handleSelectAll}
          selectedUser={selectedUsers}
          handleDeselectAll={handleDeselectAll}
          selectUnInvitedCandidates={selectUnInvitedCandidates}
          deSelectUninvitedCandidates={deSelectUninvitedCandidates}
          selectInvitedCandidates={selectInvitedCandidates}
          deSelectInvitedCandidates={deSelectInvitedCandidates}
          handleBulkInvitation={handleBulkInvitation}
          resetFilterHandler={resetFilterHandler}
        />
      )}

      <ul
        role="list"
        className=" w-full  divide-y-[1px] divide-gray  divide-opacity-10 "
      >
        {filteredCandidateList?.map(
          (
            {
              last_name,
              first_name,
              id,
              email,
              selection_status,
              interview_status,
              mobile_no,
              was_invite_sent,
              additional_info,
            },
            index
          ) => (
            <li
              {...attrs}
              // data-userId={id}
              key={index}
              onClick={() => {
                if (id !== undefined) {
                  isCheckboxShown
                    ? handleUserSelect(+id)
                    : navigateToCandidatePage(+id);
                }
              }}
              className="group relative my-1 flex  flex-1 cursor-pointer flex-row  items-center  justify-between gap-x-6 rounded-md bg-secondaryBlack bg-opacity-100  py-5 px-4  text-base text-dark shadow-box2 transition hover:bg-secondaryWhite hover:bg-opacity-70 hover:ease-linear group-hover:opacity-70 dark:text-secondary dark:hover:text-white  lg:mr-0 "
            >
              <label
                htmlFor={`selected-checkboxLabel-${id}`}
                className="flex w-5 cursor-pointer select-none  items-center text-sm font-medium text-background hover:text-primary"
              >
                <div
                  className={classNames("relative", {
                    hidden: !isCheckboxShown,
                  })}
                >
                  <input
                    type="checkbox"
                    id={`selected-checkboxLabel-${id}`}
                    className="sr-only"
                  />

                  <div className="box flex h-5 w-5 items-center justify-center rounded border border-body-color border-opacity-20 group-hover:border-primary group-hover:text-primary dark:border-white dark:border-opacity-50">
                    <span
                      className={`${
                        selectedUsers.includes(+id)
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    >
                      {/* todo : need to change the opacity to 0 when to selected else to 100 */}
                      <svg
                        width="11"
                        height="8"
                        viewBox="0 0 11 8"
                        className="fill-current"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                          // fill="#3056D3"
                          // stroke="#3056D3"
                          className=""
                          strokeWidth="0.4"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </label>

              <p className=" absolute bottom-1 right-1 text-xs text-primary">
                {additional_info &&
                  additional_info.questions_generated &&
                  "System unable to take interview for candidate"}
              </p>
              <div className="min-w-0 flex flex-1 gap-x-4">
                <Image
                  className="bg-gray-50 h-12 w-12 flex-none rounded-full"
                  src={"/images/user/user-02.jpeg"}
                  width={10}
                  height={10}
                  alt=""
                />
                <div className="min-w-0 flex-auto">
                  <p className="text-start text-sm font-semibold leading-6 text-white group-hover:text-secondaryBlack">
                    {`${first_name} ${last_name}`}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-white group-hover:text-secondaryBlack">
                    {email}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4  space-x-4 pr-10">
                {/* Todo: uncomment this code after testing */}
                {/* {was_invite_sent && (
                  <p
                    className={`text-gray-900 rounded-md  bg-[green] px-2 py-[1px] text-[10px] font-medium leading-6`}
                  >
                    invite sent
                  </p>
                )} */}

                <div
                  className={classNames({
                    hidden: HideInviteIcon.includes(interview_status as string),
                  })}
                  onClick={(e) => {
                    sendInviteHandler(
                      e as React.MouseEvent<HTMLDivElement>,
                      +id,
                      mobile_no ?? ""
                    );
                  }}
                >
                  <Icon
                    icon={"cil:send"}
                    className="text-white group-hover:text-secondaryBlack"
                    width={26}
                    height={26}
                  />
                </div>

                <div className="hidden shrink-0  flex-row sm:flex sm:flex-col sm:items-end">
                  <p
                    className={`text-gray-900 rounded-md border px-2 text-[10px] font-medium leading-6 ${
                      SELECTION_STATUS_COLOR[selection_status as "IP"]
                    }`}
                  >
                    {SELECTION_STATUS_LABEL[selection_status as "IP" | "S"]}{" "}
                  </p>
                </div>

                <Icon
                  icon={"ooui:next-ltr"}
                  className="text-primary"
                  width={26}
                  height={26}
                />
              </div>
              {/* </button> */}
            </li>
          )
        )}
      </ul>
    </>
  );
}

export default CandidateList;
