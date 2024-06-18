import React from "react";
import classNames from "classnames";
import Link from "next/link";

interface InfoCardProps {
  title: string;
  data: {
    label: string;
    value?: string | number;
    link?: string;
    style?: object;
  }[];
  wrapperClassName?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  data,
  wrapperClassName,
}) => {
  return (
    <div
      className={classNames(`
        my-2 w-full overflow-hidden rounded-md shadow-card outline outline-graydark ${wrapperClassName}`)}
    >
      <div className="flex h-10 items-center justify-center bg-gray py-6">
        <h3 className=" font-semibold text-secondaryBlack">{title}</h3>
      </div>
      <div className="flex flex-col p-2 py-5">
        {data?.map((val, index) => (
          <React.Fragment key={index}>
            <p className="flex items-center justify-between">
              <span className="text-xs font-semibold text-secondaryBlack">
                {val.label}{" "}
              </span>{" "}
              {val.link ? (
                <Link
                  href={val.link}
                  target="_blank"
                  className="w-16 rounded-md bg-primary p-1 text-center text-xs text-white hover:text-secondaryBlack "
                >
                  view
                </Link>
              ) : (
                <span
                  style={val?.style}
                  className="text-xs font-medium text-secondaryBlack"
                >
                  {val.value}
                </span>
              )}
            </p>
            <div
              className={`my-2 border-t border-gray ${
                index === data.length - 1 ? "last:my-0 last:border-none" : ""
              }`}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default InfoCard;
