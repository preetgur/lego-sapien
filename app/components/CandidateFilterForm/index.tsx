import React, { ChangeEvent, useRef } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import classNames from "classnames";
import { Icon } from "@iconify/react";

import {
  COMMUNICATION_SKILLS_LIST,
  INTERVIEW_STATUS_LIST,
  SELECTION_STATUS_LIST,
} from "@/app/lib/constants";

function CandidateFilterForm() {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const selectionStatusRef = useRef(
    searchParams.get("selection_status")?.toString().split(",") || []
  );
  const interviewStatusRef = useRef(
    searchParams.get("interview_status")?.toString().split(",") || []
  );
  const communicationSkillsRef = useRef(
    searchParams.get("communication_skills")?.toString().split(",") || []
  );

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = event.target;

    // Update the ref directly
    selectionStatusRef.current = selectionStatusRef.current.includes(value)
      ? selectionStatusRef.current.filter((status) => status !== value)
      : [...selectionStatusRef.current, value];

    // Update the URL based on the ref's current value
    const params = new URLSearchParams(searchParams);
    if (selectionStatusRef.current.length > 0) {
      // params.set("selection_status", selectionStatusRef.current.join(","));
      //  If there's more than one element, set the last element; otherwise, keep the first element
      // TODO: remove in future
      const statusToSet =
        selectionStatusRef.current.length > 1
          ? selectionStatusRef.current[selectionStatusRef.current.length - 1]
          : selectionStatusRef.current[0];
      params.set("selection_status", statusToSet);
    } else {
      params.delete("selection_status");
    }
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleInterviewStatusCheckboxChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { checked, value } = event.target;

    interviewStatusRef.current = interviewStatusRef.current.includes(value)
      ? interviewStatusRef.current.filter((status) => status !== value)
      : [...interviewStatusRef.current, value];

    const params = new URLSearchParams(searchParams);
    if (interviewStatusRef.current.length > 0) {
      // TODO: remove in future
      const statusToSet =
        interviewStatusRef.current.length > 1
          ? interviewStatusRef.current[interviewStatusRef.current.length - 1]
          : interviewStatusRef.current[0];
      params.set("interview_status", statusToSet);
    } else {
      params.delete("interview_status");
    }
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleCommunicationSkillsCheckboxChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { checked, value } = event.target;

    communicationSkillsRef.current = communicationSkillsRef.current.includes(
      value
    )
      ? communicationSkillsRef.current.filter((status) => status !== value)
      : [...communicationSkillsRef.current, value];

    const params = new URLSearchParams(searchParams);
    if (communicationSkillsRef.current.length > 0) {
      // TODO: remove in future
      const statusToSet =
        communicationSkillsRef.current.length > 1
          ? communicationSkillsRef.current[
              communicationSkillsRef.current.length - 1
            ]
          : communicationSkillsRef.current[0];
      params.set("communication_skills", statusToSet);
    } else {
      params.delete("communication_skills");
    }
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const resetFilterHandler = async () => {
    const params = new URLSearchParams(searchParams);
    params.delete("interview_status");
    params.delete("selection_status");
    params.delete("communication_skills");

    const newPath = searchParams.size
      ? `${pathname}?${params.toString()}`
      : `${pathname}}`;
    replace(newPath, { scroll: false });
  };

  const hasQuery =
    selectionStatusRef.current.length ||
    interviewStatusRef.current.length ||
    communicationSkillsRef.current.length;

  return (
    <form className="w-full">
      <div className="relative my-2 flex w-full flex-row  space-x-4">
        <div className="flex w-full items-center gap-3 px-10">
          <div className="flex w-full flex-col ">
            <h1 className=" my-2">Selection Status</h1>
            {SELECTION_STATUS_LIST.map((val, index) => (
              <div className=" my-1 flex" key={`ss-filter-${index}`}>
                <label
                  htmlFor={val.value}
                  className="flex cursor-pointer select-none text-sm font-semibold text-secondaryBlack text-opacity-60"
                >
                  <div className="relative">
                    <input
                      value={val.value}
                      onChange={handleCheckboxChange}
                      type="checkbox"
                      id={val.value}
                      className="sr-only"
                    />
                    <div className="box mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded border border-body-color border-opacity-20 dark:border-secondary dark:border-opacity-100">
                      <span
                        className={`${
                          selectionStatusRef.current.includes(val.value)
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                      >
                        {/* Your SVG or content for the checkbox */}
                        <svg
                          width="11"
                          height="8"
                          viewBox="0 0 11 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                            fill="#3056D3"
                            stroke="#3056D3"
                            strokeWidth="0.4"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <span className="mt-1 text-secondaryBlack">{val.label}</span>
                </label>
              </div>
            ))}
          </div>

          <div className="flex w-full flex-col ">
            <h1 className=" my-2">Interview Status</h1>
            {INTERVIEW_STATUS_LIST.map((val, index) => (
              <div className=" my-1 flex" key={`is-filter-${index}`}>
                <label
                  htmlFor={"interview" + val.value}
                  className="flex cursor-pointer select-none text-sm font-semibold text-secondaryBlack text-opacity-60"
                >
                  <div className="relative">
                    <input
                      value={val.value}
                      onChange={handleInterviewStatusCheckboxChange}
                      type="checkbox"
                      id={"interview" + val.value}
                      className="sr-only"
                    />
                    <div className="box mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded border border-body-color border-opacity-20 dark:border-secondary dark:border-opacity-100">
                      <span
                        className={`${
                          interviewStatusRef.current.includes(val.value)
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                      >
                        {/* Your SVG or content for the checkbox */}
                        <svg
                          width="11"
                          height="8"
                          viewBox="0 0 11 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                            fill="#3056D3"
                            stroke="#3056D3"
                            strokeWidth="0.4"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <span className="mt-1 text-secondaryBlack">{val.label}</span>
                </label>
              </div>
            ))}
          </div>

          <div className="flex w-full flex-col ">
            <h1 className=" my-2">Communication Skills</h1>
            {COMMUNICATION_SKILLS_LIST.map((val, index) => (
              <div className=" my-1 flex" key={`cs-filter-${index}`}>
                <label
                  htmlFor={"communication-skills" + val.value}
                  className="flex cursor-pointer select-none text-sm font-semibold text-secondaryBlack text-opacity-60"
                >
                  <div className="relative">
                    <input
                      value={val.value}
                      onChange={handleCommunicationSkillsCheckboxChange}
                      type="checkbox"
                      id={"communication-skills" + val.value}
                      className="sr-only"
                    />
                    <div className="box mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded border border-body-color border-opacity-20 dark:border-secondary dark:border-opacity-100">
                      <span
                        className={`${
                          communicationSkillsRef.current.includes(val.value)
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                      >
                        {/* Your SVG or content for the checkbox */}
                        <svg
                          width="11"
                          height="8"
                          viewBox="0 0 11 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                            fill="#3056D3"
                            stroke="#3056D3"
                            strokeWidth="0.4"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <span className="mt-1 text-secondaryBlack">{val.label}</span>
                </label>
              </div>
            ))}
          </div>

          {/* TODO: for reference if need to use at other place */}
          {/* <div className="flex w-full">
            <Controller
              name={INTERVIEW_STATUS}
              control={control}
              render={({ field, fieldState: { error } }) => (
                <CustomSelect
                  {...field}
                  label="Interview Status"
                  options={INTERVIEW_STATUS_LIST}
                  placeholder="Interview Status"
                  className="[&_.hm-select\_\_control]:focus-visible:shadow-none   [&_.hm-select\_\_control]:rounded-md [&_.hm-select\_\_control]:py-1 [&_.hm-select\_\_control]:shadow-one [&_.hm-select\_\_control]:dark:shadow-signUp "
                  closeMenuOnSelect={true}
                  error={error?.message}
                  isMulti={false}
                />
              )}
            />
          </div> */}
        </div>

        {!!hasQuery && (
          <div
            className={classNames(
              "absolute right-4 flex cursor-pointer items-center justify-center "
            )}
          >
            <Icon
              icon="zondicons:close-solid"
              className="flex  h-6 w-6  text-primary "
              color="#090E34"
              onClick={() => resetFilterHandler()}
            />
          </div>
        )}
      </div>
    </form>
  );
}

export default CandidateFilterForm;
