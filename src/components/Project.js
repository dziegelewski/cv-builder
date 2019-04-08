import React from 'react';

import List from './Utils/List';
import { styled, colors, Nested, H4 } from '../styles';

const ProjectWrapper = styled.article`
  &:nth-of-type(n+2) h4 {
      padding-top: 7px;
      border-top: 1px dotted ${colors.light};
    }
`;

const ProjectHeader = styled(Nested)`
  margin-top: 7px;
`;

const Project = ({ value: project }) => (
  <ProjectWrapper>
    <ProjectHeader>
      <H4>{project.title}</H4>
      <p>{project.position}</p>
    </ProjectHeader>
    <List list={project.info} />
  </ProjectWrapper>
)

export default Project;