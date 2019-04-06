import { useContext } from 'react';
import htmlToReact from 'html-react-parser';
import textContent from 'react-addons-text-content';

import CVContext from '../CVContext';

const CHAR = '*'; 
const DOUBLE_CHAR = CHAR.repeat(2);

const TextParser = ({ children }) => {
  const { desiredTechnologies } = useContext(CVContext);
  const isTechnologyDesired = (technologyTag) => desiredTechnologies.includes(technologyTag);
  let text = textContent(children);

  if (!text.includes(CHAR)) {
    return children
  }

  if (text.includes(DOUBLE_CHAR)) {
    text = text.replace(DOUBLE_CHAR, CHAR) + CHAR;
  }

  const wrappedWithChar = /([a-zA-Z]+)?\*(.*?)\*/g;
  const wrapWithBoldInstead = (match, technologyTag, content) => {
      return isTechnologyDesired(technologyTag)
        ? `<mark>${content}</mark>`
        : `<strong>${content}</strong>`;
  }

  return htmlToReact(
    text.replace(wrappedWithChar, wrapWithBoldInstead)
  )
}

export default TextParser;