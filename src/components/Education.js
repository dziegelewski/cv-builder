import React from 'react';

import Section from './Utils/Section';
import Timed from './Utils/Timed';

const Education = ({ education }) => {

    return (
        <Section title="Education">
            {education.map(renderSchool)}
        </Section>
    )
}

const renderSchool = (school, index) => <School key={index} school={school} />

const School = ({ school }) => (
    <>
        <Timed time={school.timespan}>
            <p>{school.name}, {school.type}</p>
            <p>{school.more}</p>
        </Timed>
    </>
)

export default Education;
