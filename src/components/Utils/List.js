import React from 'react';

import { Ul } from '../Styles';
import BoldReplacer from './BoldReplacer';


const List = ({ list, ...props }) => {
  const renderItem = (item, index) => {
    return (
      <li key={index}>
        <BoldReplacer>{item}</BoldReplacer>
      </li>
    )
  }
    
  return (
    <Ul {...props}>
      {list.map(renderItem)}
    </Ul>
  );
}
  
List.defaultProps = {
  list: [],
  raw: false,
}

export default List;
