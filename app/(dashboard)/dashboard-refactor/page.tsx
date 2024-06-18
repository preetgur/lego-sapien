import JobList from "@/app/components/JobList";
import DashboardSkeletonWithHeader from "@/app/components/Skeletons/DashboardSkeletonWithHeader";
import React, { Suspense } from "react";

const page = async ({ searchParams }: { searchParams: { query: string } }) => {
  const query = searchParams?.query || "";
  return (
    <section key={Math.random()} className="flex flex-col px-8">
      <Suspense fallback={<DashboardSkeletonWithHeader />}>
        <JobList query={query} />
        {/* <Await promise={promise}>{(data) => <JobList {...data} />}</Await> */}
      </Suspense>
    </section>
  );
};

export default page;
