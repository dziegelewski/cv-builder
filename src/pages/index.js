import React from "react"

import CV from "../components/CV"
import CVDashboard from "../components/CVDashboard"
import photo from '../data/photo.png';
import dataSource from '../data'


const IndexPage = () => (
  <CVDashboard owner={dataSource.personal.name}>
    <CV data={dataSource} photo={photo} />
  </CVDashboard >
)

export default IndexPage
