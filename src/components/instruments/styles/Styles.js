import React from 'react';
import styled from "styled-components"


export const DateText = styled.span`
    color:grey
`

export const escapedNewLineToLineBreakTag = (string) => {
    return string.split('\n').map((item, index) => {
        return (index === 0) ? item : [<br key={index} />, item]
    })
}