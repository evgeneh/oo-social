import React from 'react';

import Link from "../../instruments/link/Link";

import styled from "styled-components"

const SubBadge = styled.div`
    text-align: left;
    padding: 2px 8px 2px 8px;
    border-top: solid 1px #ccc;
    background: #eee;
    margin-bottom: 2px;
`;

const SubBadgeAllRight = styled.div`
    text-align: right;
    float: right;
`;


const  BadgeSubHeader = ({count, name, link, children}) => {
    const linkName = count + " " + name;

    const rightLink = (children === undefined) ? <Link to={link} linkName={'All'} /> : children

    return (<SubBadge>
            <Link to={link} linkName={linkName} />
            <SubBadgeAllRight >{rightLink}</SubBadgeAllRight>
        </SubBadge>
    )
}

export default BadgeSubHeader
