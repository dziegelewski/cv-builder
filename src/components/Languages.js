import React from 'react';

import Section from './Utils/Section';
import { Ul, H4 } from '../styles';
import ComponentList from './Utils/ComponentList';

const Languages = ({ languages }) => (
  <Section title="Languages">
    <Ul>
      <ComponentList list={languages} Component={Language} />
    </Ul>
  </Section>
);

const Language = ({ value: language }) => (
  <li> 
      <H4 inline>{language.name}</H4>, {language.description}
  </li>
);

export default Languages;
