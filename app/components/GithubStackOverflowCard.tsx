import React from "react";
import moment from "moment";
import InfoCard from "./InfoCard";

const fetchCandidateStackOverFlowDetail = async (id: string) => {
  try {
    const url = `https://api.stackexchange.com/2.3/answers/${id}?order=desc&sort=activity&site=stackoverflow`;
    const response = await fetch(url, {
      method: "GET",
    });

    return response.json();
  } catch (error) {
    console.log(
      "### got some error while fetching the stackoverflow details ###",
      error + ""
    );
    // throw "Error While Fetching statck overflow Details";
  }
};

const githubDetail = async (username: string) => {
  try {
    const url = `https://api.github.com/users/${username}`;
    const response = await fetch(url, {
      method: "GET",
    });

    return response.json();
  } catch (error) {
    console.log(
      "### got some error while fetching the stackoverflow details ###",
      error + ""
    );
    throw "Error While Fetching statck overflow Details";
  }
};

async function GithubStackOverFlowCard({
  githubUsername,
  stackOverflowId,
}: {
  githubUsername: string;
  stackOverflowId: string;
}) {
  //   const stackOverFlowDetail = await fetchCandidateStackOverFlowDetail(
  //     stackOverflowId
  //   );
  //   const githubCandidateDetail = await githubDetail(githubUsername);

  const [stackOverFlowDetail, githubCandidateDetail] = await Promise.all([
    fetchCandidateStackOverFlowDetail(stackOverflowId),
    githubDetail(githubUsername),
  ]);

  const githubData = {
    title: "Github Activity Details",
    interviewReport: [
      {
        label: "Total Public Repos",
        value: githubCandidateDetail?.public_repos ?? 0,
      },
      {
        label: "Total followers",
        value: githubCandidateDetail?.followers ?? 0,
      },
      {
        label: "Active Since",
        value: githubCandidateDetail?.created_at
          ? moment(githubCandidateDetail?.created_at).format(
              "MMMM D, YYYY [at] H:mm"
            )
          : "--",
      },
      {
        label: "Last Active",
        value: githubCandidateDetail?.updated_at
          ? moment(githubCandidateDetail?.updated_at).format(
              "MMMM D, YYYY [at] H:mm"
            )
          : "--",
      },
    ],
  };

  const stackOverFlowData = {
    title: "Stackoverflow Activity Details",
    details: [
      {
        label: "Questions Answered",
        value: stackOverFlowDetail?.items?.[0]?.score ?? 0,
      },
      {
        label: "Last Active ",
        value: stackOverFlowDetail?.items?.[0]?.last_activity_date
          ? moment(stackOverFlowDetail?.items?.[0]?.score).format(
              "MMMM D, YYYY [at] H:mm"
            )
          : "--",
      },
      {
        label: "View Stackoverflow Profile",
        link: stackOverFlowDetail?.items?.[0]?.owner?.link,
      },
    ],
  };

  return (
    <div className="my-2 rounded-md  bg-gray p-2">
      <h1 className="p-2 text-secondaryBlack">360° Tech site Active Score</h1>
      <div className="mb-2 flex justify-around  space-x-10 p-2">
        <InfoCard
          title={githubData.title}
          data={githubData.interviewReport}
          wrapperClassName="bg-white"
        />
        <InfoCard
          title={stackOverFlowData.title}
          data={stackOverFlowData.details}
          wrapperClassName="bg-white "
        />
      </div>
    </div>
  );
}

export default GithubStackOverFlowCard;
