import React from 'react';

import DownloadablePDF from "./DownloadablePDF";
import { styled, colors, fontSize } from './Styles';
import CVContext from './CVContext';

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  box-sizing: border-box;
  padding: 20px 40px;
`;

const NavButtton = styled.button`
  width: 100px;
  height: 60px;
  border: none;
  font-size: ${fontSize.big};
  background: ${colors.paperWhite};
  color: ${colors.chromePDFBackground};
  font-weight: 900;
  margin: 10px 0;
  border-radius: 5%;
`;

const NavButttonSpace = styled(NavButtton)`
  visibility: hidden;
`;

class CVDashboard extends React.Component {

  state = {
    enableFullsize: true,
    enablePhoto: true,
    enableClause: true,
  };

  render() {
    const {
      children,
    } = this.props;

    const {
      enablePhoto,
      enableClause,
      enableFullsize,
    } = this.state;

    return (
      <CVContext.Provider value={{ enablePhoto, enableClause }}>
        <DownloadablePDF
          enableFullsize={enableFullsize}
          ref={(r) => this.CV = r}
          title="Grzegorz Dzięgelewski CV"
        >
          {children}
        </DownloadablePDF>
        <Nav>
          <NavButtton onClick={this.togglePhoto}>
            Photo {toggledState(enablePhoto)}
          </NavButtton>
          <NavButtton onClick={this.toggleClause}>
            Clause {toggledState(enableClause)}
          </NavButtton>

          <NavButttonSpace as="div" />

          <NavButtton onClick={this.toggleFullsize}>
            Fullsize {toggledState(enableFullsize)}
          </NavButtton>
          <NavButtton onClick={this.downloadCV}>
            Download
          </NavButtton>
        </Nav>
      </CVContext.Provider>
    );
  }

  downloadCV = () => {
    this.CV.exportPDF();
  }

  togglePhoto = () => {
    this.setState({
      enablePhoto: !this.state.enablePhoto
    })
  };

  toggleClause = () => {
    this.setState({
      enableClause: !this.state.enableClause
    })
  };

  toggleFullsize = () => {
    this.setState({
      enableFullsize: !this.state.enableFullsize
    })
  };
}

function toggledState(isOn) {
  return isOn ? 'off' : 'on';
}

export default CVDashboard;