import React from "react";

import { Job_API_RESPONSE_INTERFACE } from "@/types/job";
import {
  EXPERIENCE_RANGE_TYPES,
  JOB_TYPE_CONSTANTS,
} from "@/app/lib/constants";
import { formatDate } from "@/app/lib/utils";

import IconTextCard from "./IconTextCard";
import DeleteModal from "./DeleteModal";
import LinkButton from "./LinkButton";

// Utility function to simplify experience calculation
const getExperienceLabel = (experienceRange: string) => {
  console.log({ experienceRange });
  if (!experienceRange) return "--";

  const foundExperience = EXPERIENCE_RANGE_TYPES.find(
    (val) => val.value === experienceRange
  );

  // Check if foundExperience is defined before accessing its properties
  return foundExperience ? foundExperience.label : "--";
};

function JobPostingHeader({
  job_title,
  id,
  experience_range,
  sector_name,
  department,
  posting_created_at,
  job_type,
  ...props
}: Job_API_RESPONSE_INTERFACE) {
  const experience = getExperienceLabel(experience_range as string);
  console.log({ experience });
  const sector_department =
    JSON.stringify(sector_name)?.replace(/"/g, "") + department &&
    `(${department})`;

  return (
    <div className="min-w-0 flex-1">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-secondaryBlack sm:truncate sm:text-4xl ">
          {job_title}
        </h2>
        <div className="relative flex items-end justify-end space-x-3 ">
          <LinkButton
            href={`/dashboard-refactor/job/${id}/edit`}
            title="Edit"
            styleWrapper="w-16 !py-1 !px-1 text-xs cursor-pointer"
          />
          <DeleteModal />
        </div>
      </div>
      <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
        <IconTextCard
          icon="solar:suitcase-lines-bold"
          iconStyleWrapper="h-5 w-5"
          label={JOB_TYPE_CONSTANTS[job_type]}
        />

        <IconTextCard
          icon="bxs:business"
          iconStyleWrapper="h-6 w-6"
          label={sector_department}
        />

        <IconTextCard
          icon="lets-icons:date-fill"
          iconStyleWrapper="h-5 w-5"
          label={`Posting on ${formatDate(posting_created_at)} `}
        />
      </div>
    </div>
  );
}

export default JobPostingHeader;
