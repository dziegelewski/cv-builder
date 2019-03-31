import React from 'react';

const Timed = ({ time, children }) => {
    return (
        <table>
            <tr>
                <td>{time}</td>
                <td>{children}</td>
            </tr>
        </table>
    )
}

export default Timed;
