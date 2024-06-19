"use client";
import classNames from "classnames";

function Divider({
  wrapperStyle,
  data,
}: {
  wrapperStyle?: string;
  data?: any;
}) {
  console.log({ dividerlog: data });
  return (
    <div
      className={classNames(
        `my-5 w-full border-t-[1px] border-secondary opacity-80 ${wrapperStyle}`
      )}
    ></div>
  );
}

export default Divider;
