import React from 'react';
import { PDFExport } from '@progress/kendo-react-pdf';

const backgroundStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  background: '#525659',
  padding: 20,
}

const cardStyle = {
  height: 792,
  width: 612,
  padding: 'none',
  backgroundColor: 'white',
  boxShadow: '5px 5px 5px black',
  margin: 'auto',
  overflowX: 'hidden',
  overflowY: 'hidden'
}

const buttonStyle = {
  borderColor: 'black',
  fontSize: '12px',
  margin: 20,
};

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
      <div style={backgroundStyle}>
        <PDFExport
          paperSize={'A4'}
          fileName={`${title}.pdf`}
          title={title}
          subject=""
          keywords=""
          keepTogether={keepTogether}
          ref={(r) => this.document = r}>
            <div style={cardStyle}
            >
              {this.props.children}
            </div>
        </PDFExport>
      
        <button
          style={buttonStyle}
          onClick={this.exportPDF}
        >
          Download
        </button>
      </div>
    );
  }
  
  exportPDF = () => {
    this.document.save();
  }
}

export default DownloadablePDF;