import React from 'react';
import { styled, fontSize, light } from "../Styles";

const Slash = styled.div`
  ${light()};
  display: inline-block;
  font-size: ${fontSize.huge};
  text-align: center;
  width: 35px;
`;

export default () => (
  <Slash>
    /   
  </Slash>
)