import React from 'react';

import Section from './Section';
import List from './List';


const JustListSection = ({ title, list }) => {
  return (
    <Section title={title}>
      <List list={list} />
    </Section>
  )
}
  
export default JustListSection;
  