import React from 'react';
import styled from 'styled-components';
import { SectionHeader, BaseTitle, BaseDetails } from './sharedStyle.js';

const SchoolTitle = styled(BaseTitle)``;
const SchoolDetails = styled(BaseDetails)``;
const EducationSection = () => (
  <span>
    <SectionHeader>Education</SectionHeader>
    <SchoolTitle>Columbia Law School, New York, NY 2012–2015</SchoolTitle>
    <SchoolDetails>J.D.</SchoolDetails>
    <SchoolTitle>Pomona College, Claremont, CA 2007–2011</SchoolTitle>
    <SchoolDetails>B.A. in Philosophy, Politics & Economics</SchoolDetails>
  </span>
);

export default EducationSection;
