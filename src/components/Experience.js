import React from 'react';

import Project from './Project';
import Section from './Utils/Section';
import Timed from './Utils/Timed';
import List from './Utils/List';
import ComponentList from './Utils/ComponentList';
import { Nested, H3 } from './Styles';
import TextParser from './Utils/TextParser';


const Experience = ({ experience }) => (
  <Section title="Experience">
    <ComponentList list={experience} Component={Job} />
  </Section>
);

const Job = ({ value: job }) => (
  <>
    <Timed time={job.timespan}>
        <Company value={job.company} />
        <p><strong>
          <TextParser>{job.position}</TextParser>
        </strong></p>
    </Timed>
    {job.info && (
      Array.isArray(job.info)
        ? <List list={job.info} />
        : <Nested>{job.info}</Nested>
    )}
    {job.projects && (
      <ComponentList list={job.projects} Component={Project} />
    )}
  </>
);

const Company = ({ value: company }) => (
  <div>
    <H3 inline>{company.name}</H3> ({company.description}), {company.origin}
  </div>
);


export default Experience;
