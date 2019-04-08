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

export const topOffsetOnPageBreak = () => css`
  &:first-child {
    margin-top: ${offset.sheetTop}px;
  }
`;

export const size = (px) => css`
  width: ${px}px;
  height: ${px}px;
`;

export const GlobalStyle = createGlobalStyle`
  ${fontFace};

  body {
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0;
  }
`;

export const Main = styled.main`
  margin: 0 auto;
  color: ${colors.normal};
  line-height: 150%;
  font-size: ${fontSize.normal}px;

  strong {
    ${highlight()};
  }

  mark {
    ${superhighlight()}
  }
`;

export const H1 = styled.h1`
  ${highlight()};
  font-size: ${fontSize.huge}px;
`;

export const H2 = styled.h2`
  ${highlight()};
  font-size: ${fontSize.big}px;
  margin: 0 0 10px;
`;

export const H3 = styled.h3`
  ${highlight()};
  ${inlineable()};
  font-size: ${fontSize.normal}px;
  margin: 0;
`;

export const H4 = styled.h4`
  ${light()};
  ${inlineable()};
  font-size: ${fontSize.normal}px;
  margin: 0;
`;

export const Ul = styled.ul`
  padding-left: ${offset.leftLabel}px;
  list-style: none;

  ${props => props.raw ? css`
    padding-left: 0;
  ` : css`
    li::before {
      content: '';
      background: ${colors.normal};
      ${size(fontSize.normal / 3)};
      position: absolute;
      border-radius: 50%;
      opacity: 0.8;
      transform:
        translateX(-${fontSize.normal * 1.5}px)
        translateY(${fontSize.normal / 2 + 1}px);
    }
    }
  `}
`;

export const Row = styled.div`
  display: flex;
`;

export const Nested = styled.div`
  padding-left: ${offset.leftLabel}px;
`;
