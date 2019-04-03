import React from 'react';
import htmlToReact from 'html-react-parser';
import textContent from 'react-addons-text-content';

const SIGN = '*'; 
const DOUBLE_SIGN = SIGN.repeat(2);

const BoldReplacer = ({ children }) => {
  const text = textContent(children);

  if (!text.includes(SIGN)) {
    return children
  }
  else if (text.startsWith(DOUBLE_SIGN)) {
    return <strong>{text.substr(2)}</strong>
  }
  else {
    const wrappedWithSign = /\*([\w\s\.,-]*)\*/g;
    const wrapWithBoldInstead = (match, content) => `<strong>${content}</strong>`;

    return htmlToReact(
      text.replace(wrappedWithSign, wrapWithBoldInstead)
    )
  }
}

export default BoldReplacer;