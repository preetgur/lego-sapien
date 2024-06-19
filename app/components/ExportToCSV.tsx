"use client";
import React from "react";
import { CSVLink } from "react-csv";
import moment from "moment";

import { INTERVIEW_STATUS_LABEL } from "@/app/lib/constants";
import { CandidateInterface } from "@/types/auth";

function ExportToCSV({
  list,
  fileName,
}: {
  list: CandidateInterface[];
  fileName: string;
}) {
  const restructredData = list.map((item, index) => ({
    ["Sr No"]: index + 1,
    ["JD Name"]: fileName,
    ["Candidate Name"]: item.first_name + " " + item.last_name,
    ["Email Id"]: item?.email,
    Mobile: item?.mobile_no,
    ["Created On"]: moment(item?.profile_created_at).format(
      "MMMM D, YYYY [at] H:mm"
    ),
    ["Interview Status"]:
      INTERVIEW_STATUS_LABEL[item?.interview_status as "IP"], // todo need to replace with acutal data
  }));

  return (
    <div>
      <CSVLink
        data={restructredData}
        filename={`${fileName}.csv`}
        className=" rounded-md bg-primary py-[14px] px-4 font-medium text-white hover:text-secondaryBlack"
      >
        Export to CSV
      </CSVLink>
    </div>
  );
}

export default ExportToCSV;
