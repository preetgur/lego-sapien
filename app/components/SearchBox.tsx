"use client";

import React, { useEffect, useRef } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Icon } from "@iconify/react";
import classNames from "classnames";
import { useDebouncedCallback } from "use-debounce";
import Button from "./Button";

function SearchBox() {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const inputRef = useRef<HTMLInputElement>(null); // Step 2: Create a ref for the input

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 500);

  const deleteQuery = () => {
    const params = new URLSearchParams(searchParams);
    params.delete("query");
    replace(`${pathname}`);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const hasQuery = searchParams.get("query")?.toString();

  return (
    <div>
      <form
        className="mt-5 flex space-x-10"
        // onSubmit={(e) => {
        //   e.preventDefault();

        //   // if (!searchValue) {
        //   //   push("/dashboard-refactor");
        //   // } else {
        //   //   push(`/dashboard-refactor?search=${searchValue}`);
        //   // }
        //   // refresh();
        // }}
      >
        <div className="relative flex flex-1">
          <input
            type="text"
            ref={inputRef}
            // value={searchValue}

            onChange={(e) => handleSearch(e.target.value)}
            defaultValue={hasQuery}
            placeholder={"Search Job By Title & Description"}
            className={`focus-visible:shadow-none  w-full rounded-md border border-transparent border-primary bg-white py-3 px-6 text-base text-secondaryBlack  placeholder-graydark shadow-one outline-none`}
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
        <div className="flex min-w-[120px]">
          <Button
            // disabled={loading}
            // label={loading ? "..." : "Search"}
            label={"Search"}
            type="submit"
            // styleWrapper={loading ? "bg-opacity-40 ease-linear " : ""}
          />
        </div>
      </form>
    </div>
  );
}

export default SearchBox;
