import React from "react";
import DegreeCard from "../../components/degreeCard/DegreeCard";
import { degrees } from "../../portfolio";
import { Fade } from "react-reveal";

type TEducations = {
  theme: any;
}
const Educations = (props:TEducations) => {

  const theme = props.theme;
  return (
    <div className="main" id="educations">
      <div className="educations-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="educations-header" style={{ color: theme.text }}>
            Degrees Received
          </h1>
        </Fade>
      </div>
      <div className="educations-body-div">
        {degrees.degrees.map((degree, idx) => {
          return <DegreeCard
            degree={degree}
            theme={theme}
            key={degree.title || idx}
          />;
        })}
      </div>
    </div>
  );
}

export default Educations;
