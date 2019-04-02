import React from 'react';

import Section from './Utils/Section';
import Timed from './Utils/Timed';
import List from './Utils/List';
import BoldReplacer from './Utils/BoldReplacer';

const Experience = ({ experience }) => {
  return (
    <Section title="Experience">
      {experience.map(renderCompany)}
    </Section>
  )
}

const renderCompany = (company, index) => <Company key={index} company={company} />

const Company = ({ company }) => (
  <>
    <Timed time={company.timespan}>
        <p><BoldReplacer>{company.company}</BoldReplacer></p>
        <p>{company.position}</p>
    </Timed>
    <List list={company.info} />
  </>
)

export default Experience;
