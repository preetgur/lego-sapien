"use server";

import Fetch from "@/app/lib/fetchHelper";
import { AddCandidateInterface, UpdateCandidateInterface } from "@/types/auth";
import { redirect } from "next/navigation";

export async function getJobPosting(query?: string | undefined) {
  try {
    const url = query ? `/jobpostings?search=${query}` : "/jobpostings/";
    const jobs = await Fetch({
      url,
      method: "GET",
      tag: "revalidate-job-list",
    });
    return jobs;
  } catch (error) {
    return { error };
  }
}

export const getJobById = async (id: number) => {
  try {
    const job = await Fetch({ url: `/jobpostings/${id}/`, method: "GET" });
    console.log({ job });
    return job;
  } catch (error) {
    throw error;
  }
};

export const getCandidateList = async (
  id: string,
  query?: undefined | string | any
) => {
  try {
    const url = query
      ? `/jobpostings/${id}/candidates/?${query}`
      : `/jobpostings/${id}/candidates/`;

    const list = await Fetch({
      url,
      method: "GET",
      tag: "revalidate-job-id-candidate-list",
    });

    return (
      list ?? {
        count: 0,
        next: null,
        previous: null,
        results: [],
      }
    );
  } catch (error) {
    throw error;
  }
};

export const deleteJobPostingById = async (id: number) => {
  const url = `/jobpostings/${id}/`;
  const resp = await Fetch({
    url,
    method: "PATCH",
    tag: "delete-job",
    data: {
      is_deleted: true,
    },
  });
  // const resp = await axiosInstance.patch(`/jobpostings/${id}/`, {
  //   is_deleted: true,
  // });
  console.log("Deleted job posting", resp);
  redirect("/dashboard-refactor");
  // revalidateTag("revalidate-job-list");
};

export const updateCandidate = async (body: UpdateCandidateInterface) => {
  const { jobId, id, ...reqBody } = body;
  try {
    // Filter out non-truthy values from newData
    const filteredData: any = Object.fromEntries(
      Object.entries(reqBody).filter(([_, value]) => value)
    );

    console.log("#### update candidate ####", { reqBody, filteredData });
    const url = `/jobpostings/${jobId}/candidates/${id}/`;

    await Fetch({
      url,
      method: "PATCH",
      tag: "update-candidate",
      data: filteredData,
    });
  } catch (error) {
    // throw error;
    console.log("update candidate error:", error);
    return Promise.reject(error);
  }
  // redirect(`/dashboard-refactor/job/${jobId}`);

  // revalidateTag("revalidate-job-id-candidate-list");
};

export async function addCandidate(body: AddCandidateInterface) {
  const { jobId, ...reqBody } = body;

  try {
    if (!jobId) {
      throw new Error("jobId is missing");
    }
    const experience = body.experience?.value;
    const candidate_level = body.candidate_level?.value;
    const candidate_language_code = (
      body.candidate_language_code as { label: string; value: string }
    )?.value;
    // Check if experience is not null or undefined before including it in the request
    const requestBody = {
      ...reqBody,
      ...(experience != null && { experience: experience }),
      candidate_level,
      candidate_language_code,
    };
    const url = `/jobpostings/${jobId}/candidates/`;
    const resp = await Fetch({
      url,
      method: "POST",
      tag: "add-candidate",
      data: requestBody,
    });
    // revalidateTag("revalidate-job-id-candidate-list");
    // revalidatePath("/dashboard-refactor/job/[id]", "page");

    // return resp;
  } catch (error) {
    console.log("add candidate error:", error);
    // return { error };
    return Promise.reject(error);
  }
  redirect(`/dashboard-refactor/job/${jobId}`);
}
