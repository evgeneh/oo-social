import React from 'react';


import styled from 'styled-components'
import Link from "../instruments/link/Link";


const PageFooter = styled.div`
    grid-area: f;
    text-align: center;
    padding: 20px 10px;
    height: auto;
    display: table-cell;
    vertical-align: bottom;
    
    @media (max-width: 375px) {
        display: none;
    }
`;



const Footer = () => {
    return (
        <PageFooter>
            <Link to={"https://github.com/evgeneh" } isExternal={true} linkName={"@evgeneh"} />
            <small> 2019 </small>
        </PageFooter>
    )
}

export  default Footer