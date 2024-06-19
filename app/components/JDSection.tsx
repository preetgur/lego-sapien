import classNames from "classnames";
import React from "react";

interface JDSectionProps {
  label: string;
  value?: string;
  children?: React.ReactNode;
}

const JDSection: React.FC<JDSectionProps> = ({ label, value, children }) => {
  return (
    <div
      className={classNames(
        "mt-2 flex flex-col sm:flex-row sm:flex-wrap sm:space-x-6"
      )}
    >
      <div className="text-gray-500 flex flex-col flex-wrap  sm:flex-row">
        <span className="pr-4 text-sm font-semibold text-secondaryBlack opacity-100">
          {label} :
        </span>

        <div className="flex flex-wrap text-sm text-secondary md:text-base">
          <span className="pr-2 text-sm text-secondaryBlack">
            {value}
            {children}
          </span>
        </div>
      </div>
    </div>
  );
};

export default JDSection;
