import React, { useContext } from 'react';

import Skills from './Skills';
import Section from './Utils/Section';
import LinkBig from './Utils/LinkBig';
import SlashBig from './Utils/SlashBig';
import { styled } from '../styles';
import CVContext from './CVContext';

const Links = styled.div`
  margin: 10px 0;
`;

const Programming = ({ programming }) => {
  const {
    homePage,
    githubPage,
    skills
  } = programming;
  const { enableBlind } = useContext(CVContext)
  
  return (
    <Section title="Programming" separated={enableBlind}>
      {!enableBlind && (
        <Links>
          <LinkBig url={homePage} />
          <SlashBig />
          <LinkBig url={githubPage} />
        </Links>
      )}
      <Skills data={skills} />
    </Section>
  )
};

export default Programming;
  