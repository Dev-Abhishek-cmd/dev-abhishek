import React from "react";
import { Accordion, Panel } from "baseui/accordion";
import ExperienceCard from "@/src/components/experienceCard/ExperienceCard";

const ExperienceAccordion = (props) => {

  const theme = props.theme;
  return (
    <div className="experience-accord">
      <Accordion>
        {props.sections.map((section, sIdx) => {
          return (
            <Panel
              className="accord-panel"
              title={section["title"]}
              key={section["title"] || sIdx}
              overrides={{
                Header: {
                  style: () => ({
                    backgroundColor: `${theme.body}`,
                    border: `1px solid`,
                    borderRadius: `5px`,
                    borderColor: `${theme.headerColor}`,
                    marginBottom: `3px`,
                    fontFamily: "Google Sans Regular",
                    color: `${theme.text}`,
                    ":hover": {
                      color: `${theme.secondaryText}`,
                    },
                  }),
                },
                Content: {
                  style: () => ({
                    backgroundColor: `${theme.body}`,
                  }),
                },
              }}
            >
              {section["experiences"].map((experience, index) => {
                return (
                  <ExperienceCard
                    index={index}
                    totalCards={section["experiences"].length}
                    experience={experience}
                    theme={theme}
                    key={experience.title || index}
                  />
                );
              })}
            </Panel>
          );
        })}
      </Accordion>
    </div>
  );

}

export default ExperienceAccordion;
