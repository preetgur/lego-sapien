import React from "react";

function ProfileSkeleton() {
  return (
    <div className="flex h-full w-full flex-col space-y-6">
      <div className=" pulse relative h-40 w-full rounded-md bg-secondaryBlack"></div>
      <div className=" relative flex w-full items-center justify-center">
        <div className=" pulse absolute -top-28  h-36 w-36 rounded-full bg-secondaryBlack" />
      </div>
      <div className=" flex flex-col items-center justify-center space-y-4 pt-10">
        <div className=" pulse h-10 w-1/3 rounded-md bg-secondaryBlack" />
        <div className=" pulse h-10 w-1/3 rounded-md bg-secondaryBlack" />
      </div>
      <div className=" pulse h-1 w-full rounded-md bg-secondaryBlack" />
      <div className=" flex flex-col items-center justify-center space-y-5">
        <div className=" pulse h-16 w-1/2 rounded-md bg-secondaryBlack" />
        <div className=" pulse h-16 w-1/2 rounded-md bg-secondaryBlack" />
        <div className=" pulse h-16 w-1/2 rounded-md bg-secondaryBlack" />
      </div>
    </div>
  );
}

export default ProfileSkeleton;
