import React from "react"

import CV from "../components/CV"
import CVDashboard from "../components/CVDashboard"
import data from '../data/data'
import photo from '../data/photo.png';


const IndexPage = () => (
  <CVDashboard>
    <CV data={data} photo={photo} />
  </CVDashboard >
)

export default IndexPage
