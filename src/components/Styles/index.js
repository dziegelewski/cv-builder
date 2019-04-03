import styledComponents, { createGlobalStyle, css } from 'styled-components';

import { colors, fontSize, offset } from './variables';
import fontFace from './fontFace';

export { colors, fontSize, offset } from './variables';

export const styled = styledComponents; 

export const superhighlight = () => css`
  font-weight: bold;
  color: ${colors.super};
  background: transparent;
`;

export const highlight = () => css`
  font-weight: bold;
  color: ${colors.normal};
`;

export const light = () => css`
  font-weight: bold;
  color: ${colors.light};
`;

export const inlineable = () => css`
  ${props => props.inline && `
    display: inline-block;
  `}
`;

export const GlobalStyle = createGlobalStyle`
  ${fontFace};

  html {
    font-size: ${fontSize.normal};
  }

  body {
    margin: 0;
    padding: 0;
    color: ${colors.normal};
    line-height: 150%;
  }

  p {
    margin: 0;
  }

  strong {
    ${highlight()};
  }

  mark {
    ${superhighlight()}
  }
`;

export const H1 = styled.h1`
  ${highlight()};
  font-size: ${fontSize.huge};
`;

export const H2 = styled.h2`
  ${highlight()};
  font-size: ${fontSize.big};
  margin: 0 0 10px;
`;

export const H3 = styled.h3`
  ${highlight()};
  ${inlineable()};
  font-size: ${fontSize.normal};
  margin: 0;
`

export const H4 = styled.h4`
  ${light()};
  ${inlineable()};
  font-size: ${fontSize.normal};
  margin: 0;
`

export const Ul = styled.ul`
  padding-left: ${offset.leftLabel}px;

  ${props => props.raw && `
    list-style: none;
    padding-left: 0;
  `}
`;

export const Row = styled.div`
  display: flex;
`;

export const Nested = styled.p`
  padding-left: ${offset.leftLabel}px;
`;
