import { useState, useEffect } from 'react';

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

export function toggledState(isOn) {
  return isOn ? 'off' : 'on';
}

export function mapTechnologiesTags(technologies) {
  const abbrevs = Object.keys(technologies);
  return abbrevs.map((abbrev) => ({
    name: technologies[abbrev],
    value: technologies[abbrev]
  }))
}