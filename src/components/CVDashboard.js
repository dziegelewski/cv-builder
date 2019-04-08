import React, { useRef, useState } from 'react';

import { styled, colors, fontSize, size } from '../styles';
import { useToggleState, toOnOff, mapTechnologiesTags, useDocumentTitle } from '../utils'
import showHelp from '../utils/showHelp';
import keepTogether from '../utils/keepTogether';
import DownloadablePDF from "./Utils/DownloadablePDF";
import MultiselectList from './Utils/MultiselectList';
import CVContext from './CVContext';

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
  cursor: pointer;
`;

const NavHelp = styled(NavButtton)`
  min-height: unset;
  border-radius: 50%;
  ${size(25)};
`;

const NavSeparator = styled(NavField)`
  visibility: hidden;
`;


const CVDashboard = ({ owner, technologiesTags, children }) => {
  useDocumentTitle(`${owner} CV`);
  const [showDesired, toggleDesired] = useToggleState(false);
  const [enablePhoto, togglePhoto] = useToggleState(true);
  const [enableClause, toggleClause] = useToggleState(true);
  const [desiredTechnologies, setDesiredTechnologies] = useState([]);

  const cv = useRef();
  const downloadCV = () => cv.current.exportPDF();

  const technologies = mapTechnologiesTags(technologiesTags);

  return (
    <CVContext.Provider value={{ enablePhoto, enableClause, desiredTechnologies }}>
      <DownloadablePDF
        enableFullsize
        keepTogether={`.${keepTogether}`}
        ref={cv}
        title={`${owner} CV`}
      >
        {children}
      </DownloadablePDF>
      <Nav>
        <NavHelp onClick={showHelp}>i</NavHelp>
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
          Photo: {toOnOff(enablePhoto)}
        </NavButtton>
        <NavButtton onClick={toggleClause}>
          Clause: {toOnOff(enableClause)}
        </NavButtton>

        <NavSeparator />

        <NavButtton onClick={downloadCV}>
          Download
        </NavButtton>
      </Nav>
    </CVContext.Provider>
  );
}

export default CVDashboard;