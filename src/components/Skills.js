import React from 'react';

import List from './Utils/List';
import './styles/skills.scss';


const Skills = ({ data }) => {

    const {
        good,
        medium,
        basic
    } = data;

    return (
        <div className="skills">
            <div className="skills--row skills--header">
                <div>Advanced</div>
                <div>Good</div>
                <div>Basic</div>
            </div>
            <div className="skills--row">
                <div>
                    <List list={good} className="bare" /></div>
                <div>
                    <List list={medium} className="bare" /></div>
                <div>
                    <List list={basic} className="bare" /></div>
            </div>
        </div>
    )
}

export default Skills;