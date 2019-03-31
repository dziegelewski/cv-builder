import React from 'react';

import Personal from './Personal';
import Programming from './Programming';
import Experience from './Experience';
import Education from './Education';
import Clause from './Clause';

import JustListSection from './Utils/JustListSection';

import './main.scss';

const CV = ({ data }) => (
    <main>
        <Personal personal={data.personal} />
        <Programming programming={data.programming} />
        <Experience experience={data.experience} />
        <JustListSection title="Languages" list={data.languages} />
        <Education education={data.education} />
        <JustListSection title="Interests" list={data.interests} />
        <Clause />
    </main>
)

export default CV;