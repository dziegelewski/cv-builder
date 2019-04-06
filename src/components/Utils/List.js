import React from 'react';

import { Ul } from '../Styles';
import TextParser from './TextParser';

const defaultRenderer = (item, index) => {
  return (
    <li key={index}>
      <TextParser>{item}</TextParser>
    </li>
  )
}

const List = ({ list = [], renderer = defaultRenderer, ...props }) => {
  return (
    <Ul {...props}>
      {list.map(renderer)}
    </Ul>
  );
}

export default List;
