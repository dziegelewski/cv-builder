import React, { useContext } from "react"

import Section from './Section';
import List from './List';
import CVContext from "../CVContext"


const JustListSection = ({ title, list }) => {
  return (
    <Section title={title}>
      <List list={list} />
    </Section>
  )
}

export default JustListSection;
