import React, { Suspense } from "react";

import Link from "next/link";

import { cookies } from "next/headers";
import { getCandidateList, getJobById } from "@/app/serverActions/job";
import { hasContent } from "@/app/lib/utils";
import JobPostingHeader from "@/app/components/JobPostingHeader";
import TechCard from "@/app/components/TechCard";
import Divider from "@/app/components/Divider";
import DisclosureComponent from "@/app/components/DisclousreComponent";
import CandidateSearchBox from "@/app/components/CandidateSearchBox";
import JobSkeleton from "@/app/components/Skeletons/JobSkeleton";
import Await from "@/app/helpers/await";
import BulkResumeUploader from "@/app/components/BulkResumeUploader";
import ExportToCSV from "@/app/components/ExportToCSV";
import CandidateList from "@/app/components/CandidateList";

const JobDetailPage = async ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const { id } = params;

  cookies();
  const selection_status = (searchParams?.selection_status || "") as string;
  const interview_status = (searchParams?.interview_status || "") as string;
  const communication_skills = (searchParams?.communication_skills ||
    "") as string;

  const job = await getJobById(+id);
  console.log({ job });
  // const jobPromise = getJobById(+id);

  // if (job?.status === 401) redirect("/signin");
  const {
    intro_message,
    email_subject,
    email_body,
    access_to,
    role_description,
    job_description,
    fitment_questions,
    default_questions,
  } = job;

  const newQueryParams = new URLSearchParams({
    selection_status,
    interview_status,
    communication_skills,
  });
  const promise = getCandidateList(id, newQueryParams);
  console.log({ newQueryParams });

  const showCandidateSection =
    hasContent(intro_message) ||
    hasContent(email_subject) ||
    hasContent(email_body) ||
    hasContent(access_to) ||
    hasContent(role_description) ||
    hasContent(job_description);

  const hasQuestionSection =
    hasContent(fitment_questions) || hasContent(default_questions);

  console.log({ job });
  return (
    <section className="px-4 text-primary" key={Math.random()}>
      <div className=" text-secondary lg:flex lg:items-center lg:justify-between ">
        <JobPostingHeader {...job} />
      </div>
      <div className=" my-2">
        <TechCard {...job} />
      </div>
      <Divider data={job} />

      <div className="flex flex-col space-y-4">
        {hasContent(job?.access_to) && (
          <>
            <div className="mt-3 flex flex-col space-y-4">
              <DisclosureComponent
                title="Email Access To"
                titleColor="white"
                panelColor="inputBackgroundtext"
                // description={email_subject}
                list={job?.access_to}
                isEmailList={true}
                isCopyIconShown={false}
                hasContent={hasContent(job?.access_to)}
              />
            </div>
          </>
        )}

        {hasQuestionSection && (
          <>
            <div className="mt-3 flex flex-col space-y-4">
              <p className=" w-max rounded-md text-lg font-bold text-primary">
                # Question Section
              </p>
              <DisclosureComponent
                title="Default Questions"
                titleColor="white"
                panelColor="inputBackgroundtext"
                // description={fitment_questions}
                list={default_questions}
                isCopyIconShown={false}
                hasContent={hasContent(default_questions)}
              />

              <DisclosureComponent
                title="Fitment Questions"
                titleColor="white"
                panelColor="inputBackgroundtext"
                // description={fitment_questions}
                list={fitment_questions}
                isCopyIconShown={false}
                hasContent={hasContent(fitment_questions)}
              />
            </div>
            {/* <Divider wrapperStyle="!my-3" /> */}
          </>
        )}

        {showCandidateSection && (
          <>
            <div className="mt-3  flex flex-col space-y-4">
              <p className="  w-max rounded-md text-lg font-bold text-primary">
                # Candidate Notification Section
              </p>

              <DisclosureComponent
                title="Email subject"
                titleColor="white"
                panelColor="white"
                description={email_subject}
                isCopyIconShown={false}
                hasContent={hasContent(email_subject)}
              />
              <DisclosureComponent
                title="Email Body"
                titleColor="white"
                panelColor="white"
                description={email_body}
                isCopyIconShown={false}
                hasContent={hasContent(email_body)}
              />
              <DisclosureComponent
                title="Intro Message"
                titleColor="white"
                panelColor="white"
                description={intro_message}
                isCopyIconShown={false}
                hasContent={hasContent(intro_message)}
              />

              <DisclosureComponent
                title="Job Description"
                titleColor="white"
                panelColor="white"
                description={job_description}
                isCopyIconShown={false}
                hasContent={hasContent(job_description)}
              />
              <DisclosureComponent
                title="Role Description"
                titleColor="white"
                panelColor="white"
                description={role_description}
                isCopyIconShown={false}
                hasContent={hasContent(role_description)}
              />
            </div>
          </>
        )}

        <Divider wrapperStyle="mt-5" />

        <div className=" my-5">
          <CandidateSearchBox />
        </div>
      </div>

      <div className=" my-10">
        <Suspense fallback={<JobSkeleton />}>
          <Await promise={promise}>
            {({ results }) => (
              <>
                <div className=" mb-4 flex w-full flex-1 flex-col items-center  justify-between rounded-md  2xsm:flex-row">
                  <h5 className="mb-3 text-xl font-semibold capitalize text-black dark:text-secondaryBlack sm:text-3xl lg:text-xl ">
                    All Candidate{" "}
                    <span className=" opacity-80"> ({results?.length}) </span>
                  </h5>

                  <div className=" flex items-center space-x-4">
                    <BulkResumeUploader />
                    <Link
                      href={`/dashboard-refactor/job/${id}/add-candidate`}
                      className="ease-in-up  rounded-md bg-primary px-8 py-3 text-base font-medium capitalize text-white transition duration-300  hover:text-secondaryBlack hover:shadow-signUp md:block md:px-9 lg:px-6 xl:px-9"
                    >
                      Add Candidate
                    </Link>
                    <ExportToCSV list={results} fileName={job?.job_title} />
                  </div>
                </div>
                <CandidateList list={results} flowType={job?.flow_type} />
              </>
            )}
          </Await>
        </Suspense>
      </div>
    </section>
  );
};

export default JobDetailPage;
