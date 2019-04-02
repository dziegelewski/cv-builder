import React from 'react';
import { styled, colors, H1, H2, offset } from '../Styles';

const SectionStyled = styled.section`
    margin: 0;
    padding: 10px ${offset.pageSide}px;
    position: relative;

    &:nth-child(even) {
        background: ${colors.background};
    }
`;


const Section = ({ mainTitle, title, children }) => {
    return (
        <SectionStyled>
            {mainTitle && (
                <H1>{mainTitle}</H1>
            )}
            {title && (
                <H2>{title}</H2>
            )}
            {children}
        </SectionStyled>
    )
}

export default Section;
