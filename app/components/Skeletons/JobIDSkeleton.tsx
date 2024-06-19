import React from "react";

function JobIDSkeleton() {
  return (
    <div className="flex h-full w-full flex-col space-y-6">
      <div className=" pulse h-24 w-full rounded-md bg-secondaryBlack" />
      <div className=" pulse h-10 w-1/2 rounded-md bg-secondaryBlack" />
      <div className=" pulse h-10 w-1/2 rounded-md bg-secondaryBlack" />
      <div className=" pulse h-10 w-10/12 rounded-md bg-secondaryBlack" />
      <div className=" pulse h-10 w-10/12 rounded-md bg-secondaryBlack" />
      <div className=" pulse h-1 w-full rounded-md bg-secondaryBlack" />
      <div className=" pulse  h-28 w-full rounded-md bg-secondaryBlack" />
      <div className=" pulse h-28 w-full rounded-md bg-secondaryBlack" />
      <div className=" pulse h-1 w-full rounded-md bg-secondaryBlack" />
      <div className=" pulse h-20 w-full rounded-md bg-secondaryBlack" />
      <div className=" pulse h-20 w-full rounded-md bg-secondaryBlack" />
      <div className=" pulse h-1 w-full rounded-md bg-secondaryBlack" />
      <div className=" h-5 w-full rounded-md bg-transparent" />
      <div className=" pulse  h-16 w-full rounded-md bg-secondaryBlack" />{" "}
      <div className=" pulse h-16 w-full rounded-md bg-secondaryBlack" />
      <div className=" pulse h-16 w-full rounded-md bg-secondaryBlack" />
      <div className=" pulse h-16 w-full rounded-md bg-secondaryBlack" />
    </div>
  );
}

export default JobIDSkeleton;
