import { useEffect, useRef, useState } from "react";

import classNames from "classnames";
import { Icon } from "@iconify/react";
import { notify } from "../helpers/NotificationHelper";

interface propsInterface {
  selectAll: VoidFunction;
  selectedUser: number[];
  isAllSelected: boolean;
  handleDeselectAll: VoidFunction;
  selectUnInvitedCandidates: VoidFunction;
  deSelectUninvitedCandidates: VoidFunction;
  selectInvitedCandidates: VoidFunction;
  deSelectInvitedCandidates: VoidFunction;
  handleBulkInvitation: VoidFunction;
  resetFilterHandler: VoidFunction;
}
const CandidateFilterDropdown = ({
  selectAll,
  handleDeselectAll,
  selectUnInvitedCandidates,
  deSelectUninvitedCandidates,
  selectInvitedCandidates,
  deSelectInvitedCandidates,
  handleBulkInvitation,
  resetFilterHandler,
  selectedUser,
  isAllSelected,
}: propsInterface) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isInvitedSelected, setIsInvitedSelected] = useState(false);
  const [isUnInvitedSelected, setIsUnInvitedSelected] = useState(false);
  const [isAllSelectedState, setIsAllSelected] = useState(false);

  const trigger = useRef<any>(null);
  const dropdown = useRef<any>(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    if (!selectedUser.length) {
      setIsInvitedSelected(false);
      setIsUnInvitedSelected(false);
      setIsAllSelected(false);
    }
  }, [selectedUser]);

  return (
    <div className="relative mb-4 flex items-center justify-between bg-white py-2 px-2">
      <div ref={trigger} className="flex items-center gap-4">
        <div>
          <label
            htmlFor={`selected-checkboxLabel-abd`}
            className="flex w-5 cursor-pointer select-none  items-center text-sm font-medium text-background hover:text-primary"
          >
            <div className={classNames("relative")}>
              <input
                type="checkbox"
                id={`selected-checkboxLabel-abd`}
                className="sr-only"
                onChange={(e) => {
                  if (e.target.checked) {
                    selectAll();

                    setIsInvitedSelected(true);
                    setIsUnInvitedSelected(true);
                  } else {
                    handleDeselectAll();
                    setIsAllSelected(false);
                    setIsInvitedSelected(false);
                    setIsUnInvitedSelected(false);
                  }
                }}
              />

              <div className="box flex h-6 w-6 items-center justify-center rounded border-2 border-body-color border-opacity-20 group-hover:border-primary group-hover:text-primary dark:border-primary dark:border-opacity-100">
                <span
                  className={`${isAllSelected ? "opacity-100" : "opacity-0"}`}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 11 8"
                    className="fill-current"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                      //   fill="#3056D3"
                      stroke="#FB607F"
                      className=""
                      strokeWidth="1.4"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </label>
        </div>
        <svg
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="hidden fill-current text-primary sm:block"
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
            fill=""
          />
        </svg>

        <span className="text-primary">
          {" "}
          selected ( {selectedUser?.length ?? 0} )
        </span>
      </div>

      {/* <!-- Dropdown Start --> */}
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        // onBlur={() => {
        //   alert("## onbluer ##");
        //   setDropdownOpen(false);
        // }}
        className={` border-stroke absolute  top-12 left-2 z-99999 flex w-40 flex-col items-center   rounded-sm border bg-secondaryBlack py-8  shadow-default dark:border-strokedark dark:bg-secondaryBlack ${
          dropdownOpen === true ? "block" : "hidden"
        }`}
      >
        <div className="space-y-6">
          <div className="flex items-center">
            <input
              id="filter-all"
              name="color[]"
              checked={isAllSelectedState || isAllSelected}
              onChange={(e) => {
                if (e.target.checked) {
                  setIsInvitedSelected(true);
                  setIsUnInvitedSelected(true);
                  setIsAllSelected(true);

                  selectAll();
                } else {
                  handleDeselectAll();
                  setIsInvitedSelected(false);
                  setIsUnInvitedSelected(false);
                  setIsAllSelected(false);
                }
              }}
              type="checkbox"
              className="border-gray-300 text-indigo-600 focus:ring-indigo-500 h-4 w-4 rounded"
            />
            <label
              htmlFor="filter-all"
              className="min-w-0 text-gray-500 ml-3 flex-1"
            >
              All
            </label>
          </div>

          <div className="flex items-center">
            <input
              id="filter-invited"
              name="color[]"
              checked={isAllSelected ? isAllSelected : isInvitedSelected}
              type="checkbox"
              onChange={(e) => {
                if (e.target.checked) {
                  setIsInvitedSelected(true);
                  selectInvitedCandidates();
                } else {
                  deSelectInvitedCandidates();
                  setIsInvitedSelected(false);
                  setIsAllSelected(false);
                }
              }}
              className="border-gray-300 text-indigo-600 focus:ring-indigo-500 h-4 w-4 rounded"
            />
            <label
              htmlFor="filter-invited"
              className="min-w-0 text-gray-500 ml-3 flex-1"
            >
              Invited
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="filter-un-invited"
              type="checkbox"
              checked={isAllSelected ? isAllSelected : isUnInvitedSelected}
              onChange={(e) => {
                if (e.target.checked) {
                  selectUnInvitedCandidates();
                  setIsUnInvitedSelected(true);
                } else {
                  deSelectUninvitedCandidates();
                  setIsUnInvitedSelected(false);
                  setIsAllSelected(false);
                }
              }}
              className="border-gray-300 text-indigo-600 focus:ring-indigo-500 h-4 w-4 rounded"
            />
            <label
              htmlFor="filter-un-invited"
              className="min-w-0 text-gray-500 ml-3 flex-1"
            >
              Un-Invited
            </label>
          </div>
        </div>
      </div>
      {/* <!-- Dropdown End --> */}

      {/* other option righ side */}
      <div className="flex items-center space-x-5 ">
        <Icon
          icon={"cil:send"}
          className="text-primary group-hover:text-secondaryBlack"
          width={26}
          height={26}
          onClick={handleBulkInvitation}
        />

        <Icon
          icon={"mingcute:delete-2-fill"}
          className="text-primary group-hover:text-secondaryBlack"
          width={26}
          height={26}
          onClick={() =>
            notify({
              type: "success",
              message: "This functionality would be implement in future.",
            })
          }
        />
        <Icon
          icon={"pajamas:clear"}
          className="text-primary group-hover:text-secondaryBlack"
          width={26}
          height={26}
          onClick={resetFilterHandler}
        />
      </div>
    </div>
  );
};

export default CandidateFilterDropdown;
