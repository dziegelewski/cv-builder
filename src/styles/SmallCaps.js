/*
  Small caps that works fine with exported pdf
*/

import React from 'react';
import styled from 'styled-components';
import textContent from 'react-addons-text-content';

const SmallerText = styled.span`
  font-size: 0.8em;
`;

export const SmallCaps = ({  children = ''}) => {
  const [firstCharater, ...rest] = textContent(children).split('');
  return (
    <span>
      <span>{firstCharater}</span><SmallerText>{rest}</SmallerText>
    </span>
  )
};
