import React from 'react';
import styled from 'styled-components';
import { SectionHeader, BaseTitle, BaseDetails } from './sharedStyle.js';
import colors from './colors.js';

const PositionTitle = styled(BaseTitle)``;
const PositionDetails = styled(BaseDetails)``;
const JobTitle = styled.span`
  color: ${colors.grey};
`;
const JobDate = styled.span`
  color: ${colors.grey};
  float: right;
`;

const ProfessionalExpSection = () => (
  <span>
    <SectionHeader>Professional Experience</SectionHeader>

    <PositionTitle>Davis Polk & Wardwell</PositionTitle>
    <JobTitle>Attorney</JobTitle>
    <JobDate>2016–2018</JobDate>
    <PositionDetails>
      Senior role in project to develop web app that provides customized legal
      advice regarding data-breach obligations
    </PositionDetails>
    <PositionDetails>
      Trained and lead 6-person team charged with implementing JavaScript
      functionality
    </PositionDetails>
    <PositionDetails>
      Wrote briefs filed before the Fifth and Seventh Circuit Courts of Appeals
    </PositionDetails>
    <PositionDetails>
      Managed multi-national document review team in case where plaintiffs
      sought over $650 million
    </PositionDetails>

    <PositionTitle>
      Fifth Circuit Court of Appeals, Judge E. Grady Jolly
    </PositionTitle>
    <JobTitle>Judicial Clerk</JobTitle>
    <JobDate>2015–2016</JobDate>
    <PositionDetails>
      Highly selective one-year position as one of four law clerks supporting
      Federal Court of Appeals Judge
    </PositionDetails>

    <PositionTitle>Testmasters Test Preparation</PositionTitle>
    <JobTitle>Instructor</JobTitle>
    <JobDate>2011–2012</JobDate>
    <PositionDetails>
      Qualified for job with perfect Law School Admissions Test score (180/180,
      99.99th percentile)
    </PositionDetails>
  </span>
);

export default ProfessionalExpSection;
