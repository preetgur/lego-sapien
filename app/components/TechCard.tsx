import { EXPERIENCE_RANGE_TYPES } from "@/app/lib/constants";

import { Job_API_RESPONSE_INTERFACE } from "@/types/job";
import React from "react";
import JDSection from "./JDSection";
import { getFlowType, getLanguageByCode } from "@/app/lib/utils";
import TechWrapper from "./TechWrapper";
import TextIconWrapper from "./TextIconWrapper";
interface LocationGroup {
  country: string;
  states: {
    state: string;
    cities: string[];
  }[];
}
function TechCard({
  should_ask_followup,
  should_record_video,
  should_virtual_interviewer_call,
  n_followup_questions,
  n_questions,
  job_primary_technologies,
  job_secondary_technologies,
  ctc_range,
  job_location,
  notice_period,
  experience_range,
  language_code,
  flow_type,
}: Job_API_RESPONSE_INTERFACE) {
  const SHOULD_DATA = [
    {
      value: should_ask_followup,
      label: "Follow Up",
    },
    {
      value: should_record_video,
      label: "Record Video",
    },
    {
      value: should_virtual_interviewer_call,
      label: "Virtual Interview Call",
    },
  ];

  const QUESTIONS_DATA = [
    {
      value: n_followup_questions,
      label: "Follow up Question",
    },
    {
      value: n_questions,
      label: "Questions",
    },
  ];

  console.log({ job_location });
  const groupedJobLocationMemoized = (): LocationGroup[] | undefined => {
    return Array.isArray(job_location)
      ? job_location?.reduce((acc: any, location) => {
          // Check if the location has a city, state, and country
          if (location.city && location.state && location.country) {
            // Find if the country already exists in the accumulator
            let countryGroup = acc.find(
              (group: any) => group.country === location.country
            );

            // If the country doesn't exist, create a new group
            if (!countryGroup) {
              countryGroup = { country: location.country, states: [] };
              acc.push(countryGroup);
            }

            // Find if the state already exists in the country group
            let stateGroup = countryGroup.states.find(
              (state: any) => state.state === location.state
            );

            // If the state doesn't exist, create a new state group
            if (!stateGroup) {
              stateGroup = { state: location.state, cities: [] };
              countryGroup.states.push(stateGroup);
            }

            // Add the city to the state group
            stateGroup.cities.push(location.city);
          }

          return acc;
        }, [])
      : [];
  };

  return (
    <div>
      <TechWrapper title="Must Have" list={job_primary_technologies} />
      <TechWrapper title="Good To Have" list={job_secondary_technologies} />

      {/* TODO: implement in future */}
      {/* <div className="mt-3 flex flex-wrap gap-5">
        {SHOULD_DATA.map((item) => (
          <TextIconWrapper isIcon key={item.label} {...item} />
        ))}
      </div> */}

      {job_location && (
        <div className=" mt-2 flex flex-col sm:flex-row sm:flex-wrap sm:space-x-6">
          <div className="text-gray-500 flex flex-col flex-wrap  sm:flex-row">
            <span className="pr-4 text-sm font-semibold text-secondaryBlack opacity-100">
              Location :
            </span>
            <div className="flex flex-wrap text-sm text-secondary md:text-base">
              {groupedJobLocationMemoized()?.length === 0
                ? "--"
                : groupedJobLocationMemoized()?.map((countryData, index) => (
                    <span
                      key={index}
                      className="pr-2 text-sm text-secondaryBlack"
                    >
                      {" "}
                      {countryData.states.map((stateData, index) => (
                        <span key={index}>
                          <span className=" font-bold">{"[ "}</span>
                          {stateData.cities.join(", ")} {"-"} {stateData.state}
                          <span className=" font-bold">{" ]"}</span>
                        </span>
                      ))}
                      <span className="font-bold">
                        {" "}
                        ({countryData.country})
                        {index < countryData.states.length - 1 ? ", " : ""}
                      </span>
                    </span>
                  ))}
            </div>
          </div>
        </div>
      )}

      {ctc_range && (
        <JDSection label="CTC">
          {ctc_range?.ctc_min} - {ctc_range?.ctc_max}
          {ctc_range?.currency?.unit && ` (${ctc_range?.currency.unit})`}
        </JDSection>
      )}
      <JDSection
        label="Notice Period"
        value={notice_period ? `${notice_period} days` : "--"}
      />

      <JDSection label="Experience">
        {experience_range
          ? EXPERIENCE_RANGE_TYPES.filter(
              (val) => val.value === experience_range
            ).map((val) => val?.label + " years")
          : "--"}
      </JDSection>

      <JDSection
        label="Job Language"
        value={getLanguageByCode(language_code as string)?.label ?? "--"}
      />

      <JDSection
        label="Interview Flow Type"
        value={flow_type ? getFlowType(flow_type as string)?.label : "--"}
      />

      <div className="mt-3 flex flex-wrap gap-5">
        {QUESTIONS_DATA.map((item) => (
          <TextIconWrapper key={item.label} {...item} />
        ))}
      </div>
    </div>
  );
}

export default TechCard;
