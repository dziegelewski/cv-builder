import React from 'react';

import List from './Utils/List';
import { styled, colors, Nested, H4 } from './Styles';


const ProjectHeader = styled(Nested)`
  margin-top: 7px;

  &:nth-of-type(n+2) h4 {
    padding-top: 7px;
    border-top: 1px dotted ${colors.light};
  }
`;

const Project = ({ value: project }) => (
  <>
    <ProjectHeader>
      <H4>{project.title}</H4>
      <p>{project.position}</p>
    </ProjectHeader>
    <List list={project.info} />
  </>
)

export default Project;