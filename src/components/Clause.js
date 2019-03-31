import React from 'react';

const Clause = ({ companyName, refNumber }) => (
    <p>
        I hereby consent to my personal data being processed by {companyName}
        for the purpose of considering my application
        for the vacancy advertised under reference number {refNumber}
    </p>
);

Clause.defaultProps = {
    companyName: 'COMPANY NAME',
    refNumber: 'REFERENCE NUMBER'
}

export default Clause;