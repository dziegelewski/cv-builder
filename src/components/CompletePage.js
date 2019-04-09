import React from "react"

import CV from "./CV"
import CVDashboard from "./CVDashboard"

const CompletePage = ({ dataSource }) => (
  <CVDashboard
    owner={dataSource.personal.name}
    tags={dataSource.Tags}
  >
    <CV data={dataSource} />
  </CVDashboard >
)

export default CompletePage