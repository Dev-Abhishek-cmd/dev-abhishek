import React from "react";
import { Fade } from "react-reveal";
import OrganizationList from "@/src/components/organizationList/OrganizationList";
import OrganizationsData from "@/src/shared/opensource/organizations.json";

const Organizations = (props) => {

  const theme = props.theme;
  return (
    <div id="organizations">
      <div className="organizations-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="organizations-header" style={{ color: theme.text }}>
            Contributed Organizations
          </h1>
        </Fade>
      </div>
      <OrganizationList logos={OrganizationsData["data"]} />
    </div>
  );
}

export default Organizations;
