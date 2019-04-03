import React from 'react';
import { PDFExport } from '@progress/kendo-react-pdf';

import { styled, colors, fontSize, css } from './Styles';
import CVContext from './CVContext';


const PDFBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${colors.chromePDFBackground};
  padding: 20px;
`;

const A4Page = styled.div`
  ${props => !props.fullsize && `
    height: 792px;
  `}
  width: 612px;
  padding: none;
  background-color: ${colors.paperWhite};
  box-shadow: 5px 5px 5px ${colors.shadow};
  margin: auto;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
`;

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

class DownloadablePDF extends React.Component {

  static defaultProps = {
    keepTogether: 'p, li',
  };

  state = {
    fullsize: true,
    enablePhoto: true,
    enableClause: true,
  };

  render() {
    const {
      title,
      keepTogether,
      children,
    } = this.props;

    const {
      enablePhoto,
      enableClause,
      fullsize,
    } = this.state;

    return (
      <CVContext.Provider value={{ enablePhoto, enableClause }}>
        <PDFBackground>
          <PDFExport
            paperSize={'A4'}
            fileName={`${title}.pdf`}
            title={title}
            subject=""
            keywords=""
            keepTogether={keepTogether}
            ref={(r) => this.document = r}
          >
            <A4Page fullsize={fullsize}>
              {children}
            </A4Page>
          </PDFExport>

          <Nav>
            <NavButtton onClick={this.togglePhoto}>
              Photo {toggledState(enablePhoto)}
            </NavButtton>
            <NavButtton onClick={this.toggleClause}>
              Clause {toggledState(enableClause)}
            </NavButtton>

            <NavButttonSpace as="div" />

            <NavButtton onClick={this.toggleFullsize}>
              Fullsize {toggledState(fullsize)}
            </NavButtton>
            <NavButtton onClick={this.exportPDF}>
              Download
            </NavButtton>
          </Nav>

        </PDFBackground>
      </CVContext.Provider>
    );
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
      fullsize: !this.state.fullsize
    })
  };
  
  exportPDF = () => {
    this.document.save();
  }
}

function toggledState(isOn) {
  return isOn ? 'off' : 'on';
}

export default DownloadablePDF;