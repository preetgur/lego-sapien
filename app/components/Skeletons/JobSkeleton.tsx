export default function JobSkeleton() {
  return (
    <div className=" my-4 flex flex-col space-y-2">
      {[...Array(10)].map((movie, index) => (
        <div
          key={index}
          className=" pulse h-32 w-full rounded-md bg-secondaryBlack"
        ></div>
      ))}
    </div>
  );
}
