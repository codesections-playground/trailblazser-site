import styled from 'styled-components';
import colors from './colors.js';

const SectionHeader = styled.h1`
  margin: 0;
  margin-top: 0.5em;
  margin-left: 0em;
  color: ${colors.blue};
`;

const BaseTitle = styled.h3`
  margin-bottom: -5px;
  margin-top: 3px;
  font-size: 1em;
`;
const BaseDetails = styled.li`
  margin-top: 0;
  margin-bottom: 0;
  line-height: 1.1;
`;

export { SectionHeader, BaseTitle, BaseDetails };
