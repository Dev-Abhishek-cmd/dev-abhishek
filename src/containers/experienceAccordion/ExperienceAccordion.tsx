import React from "react";
import ExperienceCard from "@/src/components/experienceCard/ExperienceCard";

const ExperienceAccordion = (props: any) => {
  const theme = props.theme;
  const sections = props.sections || [];

  return (
    <div className="experience-accord" style={{ width: "90%", margin: "0 auto", paddingBottom: "50px" }}>
      {sections.map((section: any, sIdx: number) => {
        return (
          <div key={section.title || sIdx} style={{ marginBottom: "50px" }}>
            <h2
              style={{
                color: theme.text,
                fontFamily: "Google Sans Bold, Montserrat, sans-serif",
                fontSize: "28px",
                marginBottom: "25px",
                borderBottom: `2px solid ${theme.headerColor || "rgba(0,0,0,0.1)"}`,
                paddingBottom: "12px",
              }}
            >
              {section.title}
            </h2>
            <div>
              {section.experiences &&
                section.experiences.map((experience: any, index: number) => {
                  return (
                    <ExperienceCard
                      index={index}
                      totalCards={section.experiences.length}
                      experience={experience}
                      theme={theme}
                      key={experience.title || index}
                    />
                  );
                })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ExperienceAccordion;
