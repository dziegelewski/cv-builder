import React from 'react';

const timeStyle = {
    'width': 50,
    paddingRight: 10
}

const Timed = ({ time, children }) => {
    return (
        <table>
            <tr>
                <td style={timeStyle}>{time}</td>
                <td>{children}</td>
            </tr>
        </table>
    )
}

export default Timed;
