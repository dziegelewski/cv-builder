import React from 'react';

import List from './Utils/List';
import { styled, colors, Nested, H4, topOffsetOnPageBreak } from '../styles';
import keepTogether from '../utils/keepTogether';
import TextParser from './Utils/TextParser';

const ProjectWrapper = styled.article`
  ${topOffsetOnPageBreak()};

  &:nth-of-type(n+2) h4 {
      padding-top: 7px;
      border-top: 1px dotted ${colors.light};
    }
`;

const ProjectHeader = styled(Nested)`
  margin-top: 7px;
`;

const Project = ({ value: project }) => (
  <ProjectWrapper className={keepTogether}>
    <ProjectHeader>
      <H4><TextParser>{project.title}</TextParser></H4>
      <p>{project.position}</p>
    </ProjectHeader>
    <List list={project.info} />
  </ProjectWrapper>
)

export default Project;