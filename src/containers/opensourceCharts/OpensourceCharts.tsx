import React from "react";
import { Fade } from "react-reveal";
import PullRequestChart from "@/src/components/pullRequestChart/PullRequestChart";
import IssueChart from "@/src/components/issueChart/IssueChart";

const OpensourceCharts = (props) => {

  const theme = props.theme;
  return (
    <div className="main-div">
      <div className="os-charts-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="os-charts-header" style={{ color: theme.text }}>
            Contributions
          </h1>
        </Fade>
      </div>
      <div className="os-charts-body-div">
        <PullRequestChart />
        <IssueChart />
      </div>
    </div>
  );
}

export default OpensourceCharts;
