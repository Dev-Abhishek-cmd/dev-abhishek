import React from "react";
import styled from "styled-components";
import { socialMediaLinks } from "../../portfolio";
import Link from "next/link";

const IconWrapper = styled.span`
  i {
    background-color: ${(props) => props.backgroundColor};
  }
  &:hover i {
    background-color: ${({ theme }) => theme.text};
    transition: 0.3s ease-in;
  }
`;

const socialMedia = (props) => {
  return (
    <div className="social-media-div">
      {socialMediaLinks.map((media, i) => {
        return (
          <Link
            key={i}
            href={media.link}
            className={`icon-button`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWrapper {...media} {...props}>
              <i className={`fab ${media.fontAwesomeIcon}`}></i>
            </IconWrapper>
          </Link>
        );
      })}
    </div>
  );
}
export default socialMedia