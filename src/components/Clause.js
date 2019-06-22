import React, { useContext } from 'react';

import { styled, fontSize, colors } from '../styles';
import CVContext from './CVContext';
import Section from './Utils/Section';


const ClauseText = styled.p`
  font-size: ${fontSize.small}px;
  color: ${colors.special};
  margin: 10px 0;
`;

const Clause = () => {
  const { enableClause, enableBlind } = useContext(CVContext);

  if (!enableClause || enableBlind) {
    return null;
  }

  return (
    <Section>
      <ClauseText>
        I hereby give consent for my personal data included in my application to be processed for the purposes of the recruitment process under the Personal Data Protection Act as of 29 August 1997, consolidated text: Journal of Laws 2002, item 1182 as amended.
      </ClauseText>
    </Section>
  );
};

export default Clause;