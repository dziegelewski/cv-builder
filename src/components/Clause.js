import React from 'react';

import { styled, fontSize, colors } from './Styles';
import Section from './Utils/Section';


const ClauseText = styled.p`
  font-size: ${fontSize.small};
  color: ${colors.special};
  margin: 10px 0;
`;

const Clause = ({ companyName, refNumber }) => (
  <Section>
    <ClauseText>
        I hereby consent to my personal data being processed by {companyName}
        for the purpose of considering my application
        for the vacancy advertised under reference number {refNumber}
    </ClauseText>
  </Section>
);

Clause.defaultProps = {
  companyName: 'COMPANY NAME',
  refNumber: 'REFERENCE NUMBER'
}

export default Clause;