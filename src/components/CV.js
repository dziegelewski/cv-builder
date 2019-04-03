import React from 'react';

import { styled, GlobalStyle } from './Styles';
import Personal from './Personal';
import Programming from './Programming';
import Experience from './Experience';
import Education from './Education';
import Languages from './Languages';
import Clause from './Clause';
import JustListSection from './Utils/JustListSection';

const MainStyled = styled.main`
  margin: 0 auto;
`;

const CV = ({ data, photo }) => {
  return (
    <>
      <GlobalStyle />
      <MainStyled>
          <Personal personal={data.personal} photo={photo} />
          <Programming programming={data.programming} />
          <Experience experience={data.experience} />
          <Languages languages={data.languages} />
          <Education education={data.education} />
          <JustListSection title="Interests" list={data.interests} />
          <Clause />
      </MainStyled>
    </>
  )
}

export default CV;