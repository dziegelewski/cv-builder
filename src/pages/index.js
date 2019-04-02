import React from "react"

import CV from "../components/CV"
import DownloadablePDF from "../components/DownloadablePDF";
import data from '../data/data'
import photo from '../data/photo.png';


const IndexPage = () => (
  <DownloadablePDF title="CV Grzegorz Dzięgelewski">
    <CV data={data} photo={photo} />
  </DownloadablePDF>
)

export default IndexPage
