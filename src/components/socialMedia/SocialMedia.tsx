import React from "react";
import styled, { DefaultTheme } from "styled-components";
import { socialMediaLinks } from "../../portfolio";
import Link from "next/link";

interface IconWrapperProps {
  backgroundColor: string;
  theme: DefaultTheme;
}
const IconWrapper = styled.span<IconWrapperProps>`
  i {
    background-color: ${(props) => props.backgroundColor};
  }
  &:hover i {
    background-color: ${({ theme }) => theme.text};
    transition: 0.3s ease-in;
  }
`;

interface SocialMediaProps {
  theme: DefaultTheme;
}
const socialMedia = (props: SocialMediaProps) => {
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
            <IconWrapper backgroundColor={media.backgroundColor} theme={props.theme}>
              <i className={`fab ${media.fontAwesomeIcon}`}></i>
            </IconWrapper>
          </Link>
        );
      })}
    </div>
  );
}
export default socialMedia