import { useContext } from 'react';
import htmlToReact from 'html-react-parser';
import textContent from 'react-addons-text-content';

import CVContext from '../CVContext';
import { useGetHiddenOnBlind } from '../../utils'


const CHAR = '*'; 
const DOUBLE_CHAR = CHAR.repeat(2);

const TextParser = ({ children }) => {
  const { markedTags } = useContext(CVContext);
  const hiddenOnBlind = useGetHiddenOnBlind();
  const isTagMarked = (tag) => markedTags.includes(tag);
  let text = textContent(children);

  if (!text.includes(CHAR)) {
    return children
  }

  if (text.includes(DOUBLE_CHAR)) {
    text = text.replace(DOUBLE_CHAR, CHAR) + CHAR;
  }

  const wrappedWithConfidentialTag = /CONFIDENTIAL\*(.*?)\*/g;
  const hideConfidentialText = (match, content) => hiddenOnBlind(content);

  const wrappedWithChar = /([a-zA-Z]+)?\*(.*?)\*/g;
  const wrapWithBoldInstead = (match, technologyTag, content) => {
      return isTagMarked(technologyTag)
        ? `<mark>${content}</mark>`
        : `<strong>${content}</strong>`;
  }

  return htmlToReact(
    text
      .replace(wrappedWithConfidentialTag, hideConfidentialText)
      .replace(wrappedWithChar, wrapWithBoldInstead)
  )
}

export default TextParser;