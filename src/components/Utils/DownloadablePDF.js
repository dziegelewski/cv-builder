import React, { useImperativeHandle, forwardRef, useRef } from 'react';
import { PDFExport } from '@progress/kendo-react-pdf';

import { styled, colors } from '../../styles';


const PDFBackground = styled.div`
  width: 100%;
  min-height: 100%;
  position: absolute;
  box-sizing: border-box;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
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

const DownloadablePDF = ({ children, title, enableFullsize, keepTogether }, ref) => {
    const document = useRef();
    const exportPDF = () => document.current.save();
    useImperativeHandle(ref, () => ({ exportPDF }))

    return (
      <PDFBackground>
        <PDFExport
          paperSize={'A4'}
          fileName={`${title}.pdf`}
          title={title}
          subject=""
          keywords=""
          keepTogether={keepTogether}
          ref={document}
        >
          <A4Page fullsize={enableFullsize}>
            {children}
          </A4Page>
        </PDFExport>
      </PDFBackground>
    );
}

export default forwardRef(DownloadablePDF);
