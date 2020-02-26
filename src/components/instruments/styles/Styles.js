import React from 'react';
import styled from "styled-components"


export const DateText = styled.span`
    color:grey
`

export const ListContainerSection = styled.section`
    padding: 5px 10px;
`

export const SinglePostBody = styled.div`
    display: grid;
    grid-template-columns: ${p => p.imgWidth}px 1fr;
    grid-gap: 5px;
    padding: 10px 5px;
`;

export const escapedNewLineToLineBreakTag = (string) => {
    if (string === undefined) return '';
    return string.split('\n').map((item, index) => {
        return (index === 0) ? item : [<br key={index} />, item]
    })
}