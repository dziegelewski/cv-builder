import React from 'react';

import List from './Utils/List';
import { styled, colors, light } from './Styles';


const SkillsTable = styled.div`
  margin-top: 20px;
  margin-bottom: -10px;
  display: flex;
`;

const SkillsLevel = styled.div`
  flex-basis: 33.3%;
`;

const LevelHeader = styled.div`
  ${light()};
  border-bottom: 1px solid ${colors.light};
`;

const LevelContent = styled.div`
  padding-right: 10px;
`;

const Skills = ({ data }) => {
    const skillLevels = [
      { label: 'Advanced', list: data.advanced },
      { label: 'Good', list: data.good },
      { label: 'Basic', list: data.basic },
    ]

    return (
        <SkillsTable>
          {skillLevels.map(renderSkillsLevel)}
        </SkillsTable>
    )
}

const renderSkillsLevel = ({ label, list }) => (
  <SkillsLevel>
    <LevelHeader>{label}</LevelHeader>
    <LevelContent>
      <List raw list={list} />
    </LevelContent>
  </SkillsLevel>
)

export default Skills;