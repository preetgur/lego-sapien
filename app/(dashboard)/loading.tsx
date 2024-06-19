import React from "react";

import DashboardSkeletonWithHeader from "../components/Skeletons/DashboardSkeletonWithHeader";

function loading() {
  return (
    <div className=" flex flex-col">
      {/* <div className="pulse h-screen w-72 bg-secondaryBlack"> </div> */}
      {/* <div className="pulse h-24 w-full bg-secondaryBlack"> </div> */}
      <div className=" w-full px-8">
        <DashboardSkeletonWithHeader />
      </div>
    </div>
  );
}

export default loading;
