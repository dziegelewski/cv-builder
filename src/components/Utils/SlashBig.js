import React from 'react';
import { styled, fontSize, colors, light } from "../Styles";

const Slash = styled.div`
  ${light()};
  display: inline-block;
  font-size: ${fontSize.medium};
  text-align: center;
  width: 20px;
`;

export default () => (
  <Slash>
    /   
  </Slash>
)