import React from 'react';

import Skills from './Skills';
import Section from './Utils/Section';
import LinkBig from './Utils/LinkBig';
import SlashBig from './Utils/SlashBig';
import { styled } from './Styles';

const Links = styled.div`
  margin: 10px 0;
`;

const Programming = ({ programming }) => {
  const {
    homePage,
    githubPage,
    skills
  } = programming;
  
  return (
    <Section title="Programming">
      <Links>
        <LinkBig url={homePage} />
        <SlashBig />
        <LinkBig url={githubPage} />
      </Links>
      <Skills data={skills} />
    </Section>
  )
};

export default Programming;
  