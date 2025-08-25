import React from "react";
import { Fade } from "react-reveal";
import PullRequestCard from "@/src/components/pullRequestCard/PullRequestCard";
import pullRequestsData from "@/src/shared/opensource/pull_requests.json";

type TPullRequests = {
  theme: any;
};

const PullRequests = (props: TPullRequests) => {
  const theme = props.theme;
  return (
    <div>
      <div className="pull-requests-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="pull-requests-header" style={{ color: theme.text }}>
            Pull Requests
          </h1>
        </Fade>
      </div>
      <div className="pull-request-body-div">
        {pullRequestsData["data"].map((pullRequest) => {
          return <PullRequestCard key={pullRequest.id || pullRequest.title} pullRequest={pullRequest} />;
        })}
      </div>
    </div>
  );

}

export default PullRequests;
