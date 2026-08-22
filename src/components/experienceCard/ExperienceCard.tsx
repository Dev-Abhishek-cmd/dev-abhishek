import React from "react";
import { Fade } from "react-reveal";

const ExperienceCard = (props: any) => {
  const experience = props.experience;
  const index = props.index;
  const totalCards = props.totalCards;
  const theme = props.theme;

  return (
    <div
      className="experience-list-item"
      style={{ marginTop: index === 0 ? 30 : 50 }}
      key={"experience-card" + index}
    >
      <Fade left duration={2000} distance="40px">
        <div
          className="experience-card-logo-div"
          style={{
            backgroundColor: experience["color"] || theme.headerColor || "#001C55",
            borderRadius: "50%",
            width: "100px",
            height: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "15px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
          }}
        >
          <img
            className="experience-card-logo"
            src={`/images/${experience["logo_path"] || "indianic_logo.svg"}`}
            alt={experience["company"]}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
              borderRadius: "0px",
              boxShadow: "none",
            }}
          />
        </div>
      </Fade>
      <div className="experience-card-stepper">
        <div
          style={{
            width: 20,
            height: 20,
            backgroundColor: `${theme.headerColor}`,
            borderRadius: 50,
            zIndex: 100,
          }}
        />
        {index !== totalCards - 1 && (
          <div
            style={{
              height: "100%",
              minHeight: 180,
              width: 2,
              backgroundColor: `${theme.headerColor}`,
              position: "absolute",
              marginTop: 20,
            }}
          />
        )}
      </div>
      <Fade right duration={2000} distance="40px">
        <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
          <div
            className="arrow-left"
            style={{ borderRight: `10px solid ${theme.body}` }}>
          </div>
          <div
            className="experience-card"
            style={{ background: `${theme.body}`, width: "100%" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}>
              <div>
                <h3
                  className="experience-card-title"
                  style={{ color: theme.text, fontSize: "20px", fontWeight: "bold" }}>
                  {experience["title"]}
                </h3>
                <p
                  className="experience-card-company"
                  style={{ color: theme.text, fontSize: "16px", marginTop: "4px" }}>
                  <a
                    href={experience["company_url"]}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: theme.text }}>
                    {experience["company"]}
                  </a>
                </p>
              </div>
              <div>
                <div className="experience-card-heading-right">
                  <p
                    className="experience-card-duration"
                    style={{ color: theme.secondaryText, fontWeight: "600" }}>
                    {experience["duration"]}
                  </p>
                  <p
                    className="experience-card-location"
                    style={{ color: theme.secondaryText }}>
                    {experience["location"]}
                  </p>
                </div>
              </div>
            </div>

            <div
              className="experience-card-description"
              style={{ color: theme.text, marginTop: "15px", lineHeight: "1.6" }}
            >
              <p style={{ margin: "0 0 12px 0", fontSize: "15px" }}>{experience["description"]}</p>
              
              {experience["descriptionBullets"] && experience["descriptionBullets"].length > 0 && (
                <ul style={{ paddingLeft: "20px", margin: "10px 0" }}>
                  {experience["descriptionBullets"].map((bullet: string, i: number) => (
                    <li key={i} style={{ marginBottom: "8px", fontSize: "14px", color: theme.text }}>
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}

              {experience["skills"] && experience["skills"].length > 0 && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "15px" }}>
                  {experience["skills"].map((skill: string, i: number) => (
                    <span
                      key={i}
                      style={{
                        backgroundColor: theme.headerColor || "rgba(66, 133, 244, 0.15)",
                        color: theme.text,
                        fontSize: "12px",
                        fontWeight: "600",
                        padding: "4px 12px",
                        borderRadius: "14px",
                        border: `1px solid ${theme.secondaryText || "rgba(0,0,0,0.1)"}`,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default ExperienceCard;
