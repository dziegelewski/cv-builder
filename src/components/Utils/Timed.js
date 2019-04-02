import React from 'react';
import { styled, offset } from '../Styles';

const TimeCell = styled.td`
  width: ${offset.leftLabel}px;
  box-sizing: border-box;
  padding-right: 10px;
  border: none;
`;

const Timed = ({ time, children }) => {
  return (
    <table>
        <tr>
          <TimeCell>{time}</TimeCell>
          <td>{children}</td>
        </tr>
    </table>
  )
}

export default Timed;
