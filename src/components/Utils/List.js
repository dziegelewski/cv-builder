import React from 'react';

import { Ul } from '../Styles';
import BoldReplacer from './BoldReplacer';

const defaultRenderer = (item, index) => {
  return (
    <li key={index}>
      <BoldReplacer>{item}</BoldReplacer>
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
