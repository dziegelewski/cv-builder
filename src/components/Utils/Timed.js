import React from 'react';
import { styled, offset, Row } from '../Styles';

const TimeCell = styled.div`
  flex-basis: ${offset.leftLabel}px;
  box-sizing: border-box;
  padding-right: 10px;
  border: none;
`;


const Timed = ({ time, children }) => {
  return (
    <Row>
      <TimeCell>{time}</TimeCell>
      <div>{children}</div>
    </Row>
  )
}

export default Timed;
