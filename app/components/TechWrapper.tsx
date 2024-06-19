import React from "react";

type TechType = {
  title: string;
  list: Array<{ label: string; value: string }> | null | undefined;
};

function TechWrapper({ title, list }: TechType) {
  return (
    <div className=" mt-2 flex flex-col sm:flex-row sm:flex-wrap sm:space-x-6">
      <div className="text-gray-500 flex flex-col flex-wrap  sm:flex-row">
        <span className="pr-4 text-sm font-semibold text-secondaryBlack opacity-100">
          {title} :
        </span>

        <div className="flex flex-wrap text-sm text-secondary md:text-base">
          {list?.length ? (
            list?.map(({ value, label }) => (
              <span key={value} className="pr-2 text-sm text-secondaryBlack">
                {label}
              </span>
            ))
          ) : (
            <span className="opacity-70"> --</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default TechWrapper;
