import React from 'react';

import Section from './Utils/Section';
import Skills from './Skills';

const Link = ({ url }) => (
    <a href={url}>
        {url.replace(/https?:\/\//, '' )}
    </a>
)

const Programming = ({ programming }) => {
    const {
        homePage,
        githubPage,
        skills
    } = programming;

    return (
        <Section title="Programming">
            <h3>
                <Link url={homePage} /> / <Link url={githubPage} />
            </h3>
            <Skills data={skills} />
        </Section>
    )

}

export default Programming;
