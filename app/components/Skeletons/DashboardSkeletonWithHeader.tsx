import LinkButton from "../LinkButton";

export default function DashboardSkeletonWithHeader() {
  return (
    <div className=" my-4 flex flex-col space-y-2">
      <div className=" z-1 mb-2 flex flex-col items-center justify-between rounded-md border-none bg-secondaryBlack px-4 pt-6 pb-4 shadow-box 2xsm:flex-row">
        <h5 className="mb-3  text-xl font-normal capitalize text-white sm:text-3xl lg:text-xl xl:text-2xl">
          Job Postings <span className=" opacity-80"> (...) </span>
        </h5>
        <LinkButton
          href="/dashboard-refactor/job/create"
          title="create new job"
        />
      </div>

      {[...Array(10)].map((movie, index) => (
        <div
          key={index}
          className=" pulse h-32 w-full rounded-md bg-secondaryBlack"
        ></div>
      ))}
    </div>
  );
}
