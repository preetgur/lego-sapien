import React from "react";
import DashboardSkeleton from "../components/Skeletons/DashboardSkeleton";

function loading() {
  return (
    <div className="flex w-screen">
      <div className="pulse h-screen w-72 bg-secondaryBlack"> </div>
      <div className="flex w-full flex-col">
        <div className="pulse h-24 w-full bg-secondaryBlack"> </div>
        <div className="mt-10 w-full px-20">
          <DashboardSkeleton />
        </div>
      </div>
    </div>
  );
}

export default loading;
