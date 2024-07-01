"use client";

import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Icon } from "@iconify/react";
import classNames from "classnames";
import { useBoolean } from "react-use";

import { useDebouncedCallback } from "use-debounce";
import CandidateFilterForm from "./CandidateFilterForm";

function CandidateSearchBox() {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [isFilterFieldShown, toggleFilterFieldShown] = useBoolean(
    searchParams.size ? true : false
  );

  console.log({ pathname });

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("q", term);
    } else {
      params.delete("q");
    }
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, 1000);

  const deleteQuery = () => {
    const params = new URLSearchParams(searchParams);
    params.delete("q");
    const newPath = searchParams.size
      ? `${pathname}?${params.toString()}`
      : `${pathname}}`;
    replace(newPath, { scroll: false });
  };

  const hasQuery = searchParams.get("q")?.toString();

  return (
    <>
      <div className="my-10 flex w-full items-center justify-center space-x-4">
        <form className="flex w-full space-x-10">
          <div className="relative flex flex-1">
            <input
              type="text"
              onChange={(e) => handleSearch(e.target.value)}
              defaultValue={hasQuery}
              placeholder={"Search Candidate"}
              className={`focus-visible:shadow-none  w-full rounded-md border border-primary bg-white py-3 px-6 text-base text-secondaryBlack  placeholder-graydark shadow-one outline-none`}
            />

            {hasQuery && (
              <div
                className={classNames(
                  "absolute right-4 flex h-full cursor-pointer items-center justify-center "
                )}
              >
                <Icon
                  icon="zondicons:close-solid"
                  className="flex  h-6 w-6  text-primary "
                  color="#090E34"
                  onClick={() => deleteQuery()}
                />
              </div>
            )}
          </div>
        </form>

        <Icon
          icon="lets-icons:filter"
          className=" flex h-10 w-10 transform  cursor-pointer"
          color={"#FB607F"}
          onClick={toggleFilterFieldShown}
        />
      </div>

      {isFilterFieldShown && (
        <div
          className={classNames(
            "flex h-0 w-0 items-center rounded-md bg-background  p-4 transition duration-300 ease-in-out",
            {
              " h-fit !w-full": isFilterFieldShown,
            }
          )}
        >
          <CandidateFilterForm />
        </div>
      )}
    </>
  );
}

export default CandidateSearchBox;
