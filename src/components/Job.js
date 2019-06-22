import React from 'react';

import Project from './Project';
import Timed from './Utils/Timed';
import List from './Utils/List';
import { Nested, H3, styled, topOffsetOnPageBreak } from '../styles';
import { useGetHiddenOnBlind } from '../utils'
import keepTogether from '../utils/keepTogether'
import ComponentList from './Utils/ComponentList';
import TextParser from './Utils/TextParser';

const JobWrapper = styled.article`
  ${topOffsetOnPageBreak()};
`;


const hasAnyProjects = (job) => job.projects && job.projects.length;

const Job = ({ value: job }) => (
  <JobWrapper className={hasAnyProjects(job) ? '' : keepTogether}>
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
  </JobWrapper>
);

const Company = ({ value: company }) => {
  const hiddenOnBlind = useGetHiddenOnBlind();

  return (
    <div>
      <H3 inline>{hiddenOnBlind(company.name)}</H3> ({company.description}), {company.origin}
    </div>
  )
};

export default Job;;