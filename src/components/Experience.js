import React from 'react';

import Job from './Job';
import Section from './Utils/Section';
import ComponentList from './Utils/ComponentList';


const Experience = ({ experience }) => (
  <Section title="Experience">
    <ComponentList list={experience} Component={Job} />
  </Section>
);

export default Experience;
