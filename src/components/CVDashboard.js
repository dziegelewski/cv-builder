import React, { useRef, useState } from 'react';

import * as technologiesTags from '../data/technologiesTags';
import { styled, colors, fontSize } from './Styles';
import DownloadablePDF from "./Utils/DownloadablePDF";
import { useToggleState, toggledState, mapTechnologiesTags } from './Utils/Helpers';
import CVContext from './CVContext';
import MultiselectList from './Utils/MultiselectList';

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  box-sizing: border-box;
  padding: 20px 40px;
`;

const NavField = styled.div`
  width: 130px;
  min-height: 40px;
  padding: 10px 5px;
  box-sizing: border-box;
  border: none;
  font-size: ${fontSize.big}px;
  background: ${colors.paperWhite};
  color: ${colors.chromePDFBackground};
  margin: 10px 0;
  border-radius: 5%;
  display: flex;
  flex-direction: column;

  ${props => props.close && `
    margin-top: 0px;
  `};
`

const NavButtton = styled(NavField).attrs({
  as: 'button'
})`
  justify-content: center;
  align-items: center;
`;

const NavSeparator = styled(NavField)`
  visibility: hidden;
`;

const technologies = mapTechnologiesTags(technologiesTags);

const CVDashboard = ({ children }) => {
  const [enableFullsize, toggleFullsize] = useToggleState(true);
  const [showDesired, toggleDesired] = useToggleState(false);
  const [enablePhoto, togglePhoto] = useToggleState(true);
  const [enableClause, toggleClause] = useToggleState(true);
  const [desiredTechnologies, setDesiredTechnologies] = useState([]);

  const cv = useRef();
  const downloadCV = () => cv.current.exportPDF();

  return (
    <CVContext.Provider value={{ enablePhoto, enableClause, desiredTechnologies }}>
      <DownloadablePDF
        enableFullsize={enableFullsize}
        ref={cv}
        title="Grzegorz Dzięgelewski CV"
      >
        {children}
      </DownloadablePDF>
      <Nav>
        <NavButtton onClick={toggleDesired}>
          Highlight
        </NavButtton>
        {showDesired && (
          <NavField close>
            <MultiselectList
              items={technologies}
              selectedItems={desiredTechnologies}
              onChange={setDesiredTechnologies}
            />
          </NavField>
        )}
        <NavButtton onClick={togglePhoto}>
          Photo {toggledState(enablePhoto)}
        </NavButtton>
        <NavButtton onClick={toggleClause}>
          Clause {toggledState(enableClause)}
        </NavButtton>

        <NavSeparator />

        <NavButtton onClick={toggleFullsize}>
          Fullsize {toggledState(enableFullsize)}
        </NavButtton>
        <NavButtton onClick={downloadCV}>
          Download
        </NavButtton>
      </Nav>
    </CVContext.Provider>
  );
}

export default CVDashboard;