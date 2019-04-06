import React from 'react';
import { styled, offset, Row } from '../Styles';

const TimedRow = styled(Row)`
  &:nth-child(n+2) {
    margin-top: 10px;
  }
`;

const TimeCell = styled.time`
  flex-basis: ${offset.leftLabel}px;
  box-sizing: border-box;
  padding-right: 10px;
  border: none;
`;


const Timed = ({ time, children }) => {
  return (
    <TimedRow>
      <TimeCell>{time}</TimeCell>
      <div>{children}</div>
    </TimedRow>
  )
}

export default Timed;
