import React from 'react';
import styled from 'styled-components';
import fonts from './fonts.css';
import Header from './components/Header.js';
import SideBar from './components/SideBar.js';
import SoftwareEngSection from './components/SoftwareEngSection.js';
import ProfessionalExpSection from './components/ProfessionalExpSection.js';
import EducationSection from './components/EducationSection.js';

const Main = styled.div`
  margin-left: 1em;
`;

export default () => (
  <section>
    <Header />
    <Main>
      <SideBar />
      <SoftwareEngSection />
      <ProfessionalExpSection />
      <EducationSection />
    </Main>
  </section>
);
