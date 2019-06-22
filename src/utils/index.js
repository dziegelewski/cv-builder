import { useEffect, useState, useContext } from 'react';

import CVContext from '../components/CVContext';


export const useToggleState = (initial) => {
  const [state, setState] = useState(initial);

  const toggleState = () => setState(!state);
  return [state, toggleState];
}

export const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = title
  }, [])
}

export function useGetHiddenOnBlind() {
  const { enableBlind } = useContext(CVContext);

  const hiddenOnBlind = (text) => enableBlind
    ? '~'.repeat(text.length)
    : text;

    return hiddenOnBlind;
}

export const toOnOff = (isOn) => {
  return isOn ? 'on' : 'off';
}

export const mapTags = (tags) => {
  const { CONFIDENTIAL, ...onlyTags } = tags;
  const abbrevs = Object.keys(onlyTags);

  return abbrevs.map((abbrev) => ({
    name: tags[abbrev],
    value: tags[abbrev]
  }))
}