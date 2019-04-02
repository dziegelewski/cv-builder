import styledComponents, { createGlobalStyle } from 'styled-components';

import fontFace from './fontFace';

export const styled = styledComponents; 

export const colors = {
  text: '#2A2A2A',
  light: '#606060',
  highlight: '#000000',
  background: '#EEEEEE',

  shadow: '#000000',
  paperWhite: '#FFFFFF',
  chromePDFBackground: '#525659',
};

export const fontSize = {
  small: '10px',
  medium: '14px',
  big: '18px',
}

export const offset = {
  pageSide: 50,
  leftLabel: 60,
};

export const light = () => `
  font-weight: bold;
  color: ${colors.light};
`;

export const highlight = () => `
  font-weight: bold;
  color: ${colors.highlight};
`;

export const enlight = () => `
  font-weight: bold;
  color: ${colors.text};
`;

export const GlobalStyle = createGlobalStyle`
  ${fontFace};

  html {
    font-size: ${fontSize.small};
  }

  body {
    margin: 0;
    padding: 0;
    color: ${colors.text};
  }

  p,
  td
  {
    margin: 0;
    line-height: 150%;
  }

  strong {
    ${enlight()};
  }
`;

export const H1 = styled.h1`
  ${enlight()};
  font-size: ${fontSize.big};
`;

export const H2 = styled.h2`
  ${enlight()};
  font-size: ${fontSize.medium};
  margin: 0 0 10px;
`;

export const Ul = styled.ul`
  line-height: 150%;
  padding-left: ${offset.leftLabel}px;

  ${props => props.raw && `
    list-style: none;
    padding-left: 0;
  `}
`;