import React from 'react';
import styled from 'styled-components';
import colors from './colors.js';
import { SectionHeader, BaseTitle, BaseDetails } from './sharedStyle.js';

const Link = styled.a`
  color: inherit;
  text-decoration: none;
`;

const ProjectTitle = styled(BaseTitle)``;
const ProjectDetails = styled(BaseDetails)``;

const Stack = styled.span`
  color: ${colors.grey};
  font-size: 0.9em;
`;

const SoftwareEngSection = () => (
  <div>
    <SectionHeader>Software Engineering Applications</SectionHeader>
    <ProjectTitle>Trailblazers</ProjectTitle>
    <Stack>
      React | styled-components | Jest | Enzyme | Webpack | Babel | Express |
      Travis
    </Stack>
    <ProjectDetails>
      [Placeholder]
      <br />
      [Placeholder]
    </ProjectDetails>
    <ProjectDetails>
      [Placeholder]
      <br />
      [Placeholder]
    </ProjectDetails>
    <ProjectDetails>
      [Placeholder]
      <br />
      [Placeholder]
    </ProjectDetails>
    <ProjectTitle>System-Design-Capstone</ProjectTitle>
    <ProjectDetails>
      [Placeholder]
      <br />
      [Placeholder]
    </ProjectDetails>
    <ProjectDetails>
      [Placeholder]
      <br />
      [Placeholder]
    </ProjectDetails>
    <ProjectDetails>
      [Placeholder]
      <br />
      [Placeholder]
    </ProjectDetails>
    <ProjectTitle>Pass-gen</ProjectTitle>
    <Stack>Bash</Stack>
    <ProjectDetails>
      Pure bash passphrase generator built to output cryptographically secure
      passphrase to standard out.{' '}
      <Link href="https://passgen.codesections.com">
        passgen.codesections.com
      </Link>
    </ProjectDetails>
    <ProjectTitle>T5</ProjectTitle>
    <Stack>JavaScript | OAuth | HTML | CSS</Stack>
    <ProjectDetails>
      Vanilla JavaScript application (under 5KB of js) that uses OAuth to query
      the Mastodon API to determine users who have most frequently favorited
      posts by the logged-in user
    </ProjectDetails>
  </div>
);

export default SoftwareEngSection;
