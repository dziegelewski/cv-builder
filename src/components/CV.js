import React from 'react';

import { GlobalStyle, Main } from './Styles';
import Personal from './Personal';
import Programming from './Programming';
import Experience from './Experience';
import Education from './Education';
import Languages from './Languages';
import Clause from './Clause';
import JustListSection from './Utils/JustListSection';


const CV = ({ data }) => {
  return (
    <>
      <GlobalStyle />
      <Main>
          <Personal personal={data.personal} photo={data.photo} />
          <Programming programming={data.programming} />
          <Experience experience={data.experience} />
          <Languages languages={data.languages} />
          <Education education={data.education} />
          <JustListSection title="Interests" list={data.interests} />
          <Clause />
      </Main>
    </>
  )
}

export default CV;