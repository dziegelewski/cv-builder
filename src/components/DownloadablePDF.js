import React from 'react';
import { PDFExport } from '@progress/kendo-react-pdf';

import { styled, colors } from './Styles';


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

class DownloadablePDF extends React.Component {

  static defaultProps = {
    enableFullzise: true,
    keepTogether: 'p, li',
  };

  render() {
    const {
      children,
      enableFullzise,
      keepTogether,
      title
    } = this.props;

    return (
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
          <A4Page fullsize={enableFullzise}>
            {children}
          </A4Page>
        </PDFExport>
      </PDFBackground>
    )
  }

  exportPDF = () => {
    this.document.save();
  }
}

export default DownloadablePDF;
