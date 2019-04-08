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

export const toOnOff = (isOn) => {
  return isOn ? 'on' : 'off';
}

export const mapTechnologiesTags = (technologies) => {
  const abbrevs = Object.keys(technologies);
  return abbrevs.map((abbrev) => ({
    name: technologies[abbrev],
    value: technologies[abbrev]
  }))
}

export const showHelp = () => alert`
  To see your data here:
  1. Get the repo
  2. Edit source code in "src/cv-data"
  3. You might also want to e.g. edit fonts or colors in "src/components/Styles/variables"
  4. Run "npm start"
  5. And just observe the results in the browser!
  6. Display legal clause/photo or highlight technologies of your choice depending of your needs
  7. Finally "Download" the result.
`;