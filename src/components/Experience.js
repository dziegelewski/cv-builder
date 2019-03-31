import React from 'react';

import Section from './Utils/Section';
import Timed from './Utils/Timed';
import List from './Utils/List';

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
            <p><strong>{company.company}</strong></p>
            <p>{company.position}</p>
        </Timed>
        <List list={company.info} />
    </>
)

export default Experience;
