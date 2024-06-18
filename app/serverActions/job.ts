"use server";

import Fetch from "@/app/lib/fetchHelper";

export async function getJobPosting(query?: string | undefined) {
  try {
    const url = query ? `/jobpostings?search=${query}` : "/jobpostings/";
    const jobs = await Fetch(url, "GET", "revalidate-job-list");
    return jobs;
  } catch (error) {
    return { error };
  }
}
