import React from 'react';

const ComponentList = ({ list = [], Component }) => {   
  return (
    <>
      {list.map((item, index) => <Component value={item} key={index} /> )}
    </>
  );
}

export default ComponentList;
