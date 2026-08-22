import React from "react";
import { Fade } from "react-reveal";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const OrganizationList = (props) => {
  return (
    <div className="organizations-main-div">
      <ul className="dev-icons-orgs">
        {props.logos.map((logo) => {
          return (
            <OverlayTrigger
              key={logo["login"]}
              placement={"top"}
              overlay={
                <Tooltip id={`tooltip-top`}>
                  <strong>{logo["login"]}</strong>
                </Tooltip>
              }
            >
              <li className="organizations-inline" style={{ marginBottom: "5px" }}>
                <Fade bottom duration={2000} distance="40px">
                  <img
                    className="organizations-img"
                    src={logo["avatarUrl"]}
                    alt={logo["login"]}
                  />
                </Fade>
              </li>
            </OverlayTrigger>
          );
        })}
      </ul>
    </div>
  );

}

export default OrganizationList;
