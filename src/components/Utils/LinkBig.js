import React from 'react';

import { styled, fontSize, highlight } from '../Styles';

const AStyled = styled.a`
  ${highlight()};
  font-size: ${fontSize.huge}px;
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
