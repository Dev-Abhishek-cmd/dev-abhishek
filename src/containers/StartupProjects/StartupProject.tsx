import React from "react";
import "./StartupProjects.css";
import { bigProjects } from "../../portfolio";

export default function StartupProject() {
  function openProjectInNewWindow(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div className="main" id="projects">
      <div>
        <h1 className="skills-heading">{bigProjects.title}</h1>
        <p className="subTitle project-subtitle">{bigProjects.subtitle}</p>
        <div className="startup-projects-main">
          <div className="startup-project-text">
            {bigProjects.projects.map((project, idx) => {
              return (
                <div
                  className="saaya-health-div"
                  onClick={() => openProjectInNewWindow(project.link)}
                  key={project.link || idx}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="Saad Working" src={project.image} />
                </div>
              );
            })}
          </div>
          <div className="starup-project-image"></div>
        </div>
      </div>
    </div>
  );
}
