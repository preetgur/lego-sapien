"use server";

import React from "react";
import JobCard from "./JobCard";

import SearchBox from "./SearchBox";
import LinkButton from "./LinkButton";
import { getJobPosting } from "../serverActions/job";

async function JobList({ query }: { query: string }) {
  const jobs = await getJobPosting(query);
  console.log({ jobList: jobs });

  if (jobs?.isRedirectToLogin) {
    throw new Error("remove-cookie-redirect-to-login");
  }
  return (
    <div className="my-4">
      <div className=" z-1 flex flex-col items-center justify-between rounded-md border-none bg-secondaryBlack px-4 pt-6 pb-4 shadow-box 2xsm:flex-row">
        <h5 className="mb-3  text-xl font-normal capitalize text-white sm:text-3xl lg:text-xl xl:text-2xl">
          Job Postings{" "}
          <span className=" opacity-80"> ({jobs?.results?.length}) </span>
        </h5>
        <LinkButton
          href="/dashboard-refactor/job/create"
          title="create new job"
        />
      </div>

      <SearchBox />

      {jobs?.results?.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </div>
  );
}

export default JobList;
