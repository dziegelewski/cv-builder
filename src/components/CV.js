import React, { useContext } from "react"

import { GlobalStyle, Main } from '../styles';
import Personal from './Personal';
import Programming from './Programming';
import Experience from './Experience';
import Education from './Education';
import Languages from './Languages';
import Clause from './Clause';
import JustListSection from './Utils/JustListSection';
import CVContext from "./CVContext"


const CV = ({ data }) => {
  const { enableInterests } = useContext(CVContext);

  return (
    <>
      <GlobalStyle />
      <Main>
          <Personal personal={data.personal} photo={data.photo} />
          <Programming programming={data.programming} />
          <Experience experience={data.experience} />
          <Languages languages={data.languages} />
          <Education education={data.education} />
          {enableInterests && <JustListSection title="Interests" list={data.interests} />}
          <Clause />
      </Main>
    </>
  )
}

export default CV;
