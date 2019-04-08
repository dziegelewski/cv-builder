import React from 'react';

import Section from './Utils/Section';
import Timed from './Utils/Timed';
import { H4 } from '../styles';
import ComponentList from './Utils/ComponentList';

const Education = ({ education }) => (
  <Section title="Education">
    <ComponentList list={education} Component={School} />
  </Section>
);

const School = ({ value: school }) => (
  <Timed time={school.timespan}> 
    <div>
      <H4 inline>{school.name}</H4>, {school.type}
    </div>
    <p>{school.field}</p>
    <p>specialization: {school.specialization}</p>
  </Timed>
);

export default Education;
