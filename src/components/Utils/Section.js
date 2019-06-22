import React from 'react';
import { styled, colors, H1, H2, offset, topOffsetOnPageBreak } from '../../styles';

const SectionStyled = styled(({ title, broad, separated, ...props }) => <section {...props} />)`
    margin: 0;
    padding: 10px ${offset.pageSide}px;
    position: relative;

    &:nth-child(even) {
        background: ${colors.background};
    }

    ${props => props.broad && `
        padding-bottom: 20px;
    `}

    ${props => props.separated && `
        padding-top: 20px;
    `}

    ${props => props.title && `
        ${topOffsetOnPageBreak()};
    `}
`;


const Section = ({ mainTitle, title, children, ...props }) => {
    return (
        <SectionStyled title={title} {...props}>
            {mainTitle && (
                <H1>{mainTitle}</H1>
            )}
            {title && (
                <H2>{title}</H2>
            )}
            {children}
        </SectionStyled>
    )
};

export default Section;
