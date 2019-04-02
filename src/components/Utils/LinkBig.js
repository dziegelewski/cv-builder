import React from 'react';

import { styled, fontSize, enlight } from '../Styles';

const AStyled = styled.a`
  ${enlight()};
  font-size: ${fontSize.big};
  text-decoration: none;
  display: inline-block;
`;

const cutProtocol = (url) => url.replace(/https?:\/\//, '' );

const LinkBig = ({ url }) => (
  <AStyled href={url}>
    {cutProtocol(url)}
  </AStyled>
)

export default LinkBig;
