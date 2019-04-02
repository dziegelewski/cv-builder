import React from 'react';
import { PDFExport } from '@progress/kendo-react-pdf';
import { styled, colors, fontSize } from './Styles';

const PDFBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${colors.chromePDFBackground};
  padding: 20px;
`;

const A4Page = styled.div`
  height: 792px;
  width: 612px;
  padding: none;
  background-color: ${colors.paperWhite};
  box-shadow: 5px 5px 5px ${colors.shadow};
  margin: auto;
  overflow-x: hidden;
  overflow-y: hidden;
`;

const DownloadButton = styled.button`
  border: none;
  font-size: ${fontSize.medium};
  background: ${colors.paperWhite}
  margin: 20px;
`;


class DownloadablePDF extends React.Component {

  static defaultProps = {
    keepTogether: 'section',
  };

  render() {
    const {
      title,
      keepTogether
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
          ref={(r) => this.document = r}>
            <A4Page>
              {this.props.children}
            </A4Page>
        </PDFExport>
      
        <DownloadButton onClick={this.exportPDF}>
          Download
        </DownloadButton>
      </PDFBackground>
    );
  }
  
  exportPDF = () => {
    this.document.save();
  }
}

export default DownloadablePDF;