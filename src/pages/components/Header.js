import React from 'react';
import styled from 'styled-components';
import colors from './colors.js';

const StyledHeader = styled.section`
  width: 100%;
  height: 4.5em;
`;
const Name = styled.h1`
  float: left;
  margin: 0.4em;
  margin-left: 55px;
  margin-right: 0;
  font-size: 2em;
  color: ${colors.blue};
`;
const ExternalLinks = styled.span`
  margin-top: 5px;
  float: right;
  width: 34%;
`;
const Icon = styled.svg`
  width: 17px;
  margin-bottom: -3px;
  margin-right: 3px;
`;
const CodeSectionsIcon = styled(Icon)`
  height: 20px;
  width: 20px;
  margin-right: 2px;
  margin-bottom: -6px;
`;
const Link = styled.a`
  color: inherit;
  text-decoration: none;
`;
const ContactDetails = styled.span`
  margin-top: -25px;
  margin-left: 57px;
  float: left;
`;

const Header = () => (
  <span>
    <StyledHeader>
      <Name>Daniel Long Sockwell</Name>
      <ExternalLinks>
        <Link href="https://www.codesections.com">
          <CodeSectionsIcon
            viewBox="0 0 100 120"
            stroke-width="1px"
            stroke="#000"
          >
            <circle fill="#fff" stroke="none" cx="50" cy="35" r="69" />
            <path d="M -9,50 25,10 V 25 L 4,50 25,75 v 15 z" />
            <path d="m 49,92 c 12,0 20,-8 20,-17 0,-7 -3,-11 -7,-13 5,-3 7,-7 7,-12 0,-18 -30,-12 -30,-25 3,-11 17,-7 26,-3 l 2,-7 c -13,-7 -35,-4 -35,11 0,6 3,11 9,14 -5,2 -9,7 -9,13 0,16 29,11 29,24 0,5 -6,8 -13,8 -6,0 -11,-4 -15,-6 l -2,7 c 5,3 11,6 18,6 z" />
            <path d="M 110,50 75,90 V 75 L 98,50 75,25 V 10 Z" />
            <ellipse ry="8.5" rx="11.5" cy="51" cx="50" fill="#fff" />
          </CodeSectionsIcon>
          codesections.com
        </Link>{' '}
        <br />
        <Link href="https://github.com/codesections">
          <Icon
            aria-labelledby="simpleicons-github-icon"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title id="simpleicons-github-icon">GitHub icon</title>
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </Icon>
          github.com/codesections{' '}
        </Link>
        <br />
        <Link href="https://www.linkedin.com/in/daniel-sockwell/">
          <Icon
            aria-labelledby="simpleicons-linkedin-icon"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title id="simpleicons-linkedin-icon">LinkedIn icon</title>
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </Icon>
          linkedin.com/in/daniel-sockwell{' '}
        </Link>
      </ExternalLinks>
    </StyledHeader>
    <ContactDetails>
      205.807.4447 |{' '}
      <Link href="mailto:daniel@codesections.com">daniel@codesections.com</Link>
      <br />
    </ContactDetails>
  </span>
);

export default Header;
