import React from "react"

import CV from "../components/CV"
import data from '../data/data'
import DownloadablePDF from "../components/DownloadablePDF";


const IndexPage = () => (
  <DownloadablePDF title="CV Grzegorz Dzięgelewski">
    <CV data={data} />
  </DownloadablePDF>
)

export default IndexPage
