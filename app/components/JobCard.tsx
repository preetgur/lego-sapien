import Link from "next/link";
import React from "react";

import { JobInterface } from "@/types/job";
import IconComponent from "./IconComponent";

function JobCard(props: JobInterface) {
  const {
    id,
    job_title,
    job_description,
    department,
    is_active,
    candidate_count,
  } = props;

  return (
    <Link
      key={id}
      prefetch
      href={`/dashboard-refactor/job/${id}/`}
      className="dark:hover:primary group my-3  flex cursor-pointer flex-col gap-1 rounded-md border-none bg-secondaryBlack py-4 px-2  text-white shadow-box  transition  hover:scale-[1.02] hover:border-none hover:bg-secondaryWhite hover:bg-opacity-40 hover:text-primary hover:ease-linear md:px-8"
    >
      <div className="flex flex-col items-start justify-between  sm:flex-row">
        <p className="line-clamp-2 text-ellipsis pr-10 text-lg font-bold group-hover:text-primary">
          {job_title}
        </p>

        <p className="max-w-40 hidden items-center justify-center rounded-md border border-primary px-2 py-1 text-center text-xs capitalize group-hover:text-black sm:flex">
          {is_active ? "Active" : "Closed"}
        </p>
      </div>
      <div>
        <p className=" line-clamp-1 text-ellipsis text-sm text-white opacity-70 group-hover:text-secondaryBlack group-hover:opacity-100">
          {job_description}
        </p>
      </div>
      <div className="mt-2 flex justify-between">
        <div className="flex w-full flex-wrap items-center gap-2 ">
          <div className="">
            <IconComponent icon="fluent-mdl2:education" />
          </div>
          {department && (
            <p className="group-hover:text-secondaryBlack">{department}</p>
          )}
        </div>
        <div className="flex items-center gap-1">
          <IconComponent icon="fa-solid:user-tie" />

          <p className="pl-1 group-hover:text-primary ">
            {candidate_count ?? 0}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default JobCard;
