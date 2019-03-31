import React from 'react';

const Skills = ({ data }) => {

    const {
        good,
        medium,
        basic
    } = data;

    const mapSkills = (skills) => (
        <ul>
            {skills.map((skill) => (
                <p>{skill}</p>
            ))}
        </ul>
    )

    return (
        <table>
            <tr>
                <td>Good</td>
                <td>Average</td>
                <td>Basic</td>
            </tr>
            <tr>
                <td>{mapSkills(good)}</td>
                <td>{mapSkills(medium)}</td>
                <td>{mapSkills(basic)}</td>
            </tr>
        </table>
    )
}

export default Skills;