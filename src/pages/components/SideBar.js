import React from 'react';
import styled from 'styled-components';
import colors from './colors.js';

const StyledSideBar = styled.div`
  float: right;
  height: 960px;
  width: 20%;
  border: 0 solid ${colors.blue};
  border-radius: 5px;
  background-color: ${colors.lightBlue};
  margin-left: 20px;
`;

const SideBarHeader = styled.h3`
  padding-left: 2em;
  padding-right: 2em;
`;

const Skill = styled.li``;
const SideBar = () => (
  <StyledSideBar>
    <SideBarHeader>Technical Skills</SideBarHeader>
    <ul>
      <strong>Front End</strong>
      <Skill>JavaScript</Skill>
      <Skill>ReactJs</Skill>
      <Skill>PreactJs</Skill>
      <Skill>styled-components</Skill>
      <Skill>emotionJs</Skill>
      <Skill>CSS</Skill>
      <Skill>Sass</Skill>
      <Skill>Redux</Skill>
      <Skill>HTML</Skill>

      <br />
      <strong>Testing</strong>
      <Skill>Jest</Skill>
      <Skill>webpack</Skill>
      <Skill>git</Skill>
      <Skill>babel</Skill>
      <Skill>Enzyme</Skill>
      <Skill>Mocha</Skill>
      <Skill>Chai</Skill>

      <br />
      <strong>Back End</strong>
      <Skill>Node</Skill>
      <Skill>Express</Skill>
      <Skill>PostgreSQL</Skill>
      <Skill>MySQL</Skill>
      <Skill>SQLight</Skill>
      <Skill>MongoDB</Skill>

      <br />
      <strong>Tools</strong>
      <Skill>vim</Skill>
      <Skill>Tmux</Skill>
      <Skill>CURL</Skill>
      <Skill>postman</Skill>

      <br />
      <strong>Other</strong>
      <Skill>Arch Linux</Skill>
      <Skill>bash</Skill>
      <Skill>Python</Skill>
      <Skill>C</Skill>
      <Skill>restAPI</Skill>
    </ul>
  </StyledSideBar>
);

export default SideBar;
