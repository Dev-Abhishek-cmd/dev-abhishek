import React from "react";
import { Fade } from "react-reveal";
import IssueCard from "@/src/components/issueCard/IssueCard";
import issuesData from "@/src/shared/opensource/issues.json";

const Issues = (props) => {

  const theme = props.theme;
  return (
    <div>
      <div className="issues-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="issues-header" style={{ color: theme.text }}>
            Issues
          </h1>
        </Fade>
      </div>
      <div className="issues-body-div">
        {issuesData["data"].map((issue, index) => {
          return <IssueCard issue={issue}
            key={"issue" + index}
          />;
        })}
      </div>
    </div>
  );

}

export default Issues;
