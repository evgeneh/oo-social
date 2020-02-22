import React from "react";

import PropTypes from "prop-types";

import BadgeHeaderHOC from "../Widjet/BadgeHeader";
import BadgeSubHeader from "../Widjet/BadjeSubHeader";

import {NavLink} from "react-router-dom";

import styled from "styled-components"
import {dateParse} from "../../../utils/date";


const SomePhotosBlock = styled.div`
    display: grid;
    grid-gap: 5px;
    grid-template-columns: 90px 1fr;
`;

const DateText = styled.span`
    color:grey
`

//show some photos on profile page
const SomePhotos = ({photos, count, pageId}) => {
    return (
        <>
            <BadgeSubHeader count={count} name={(count === 1) ? "photo" : "photos"} link={"/photos" + pageId} />
        <SomePhotosBlock >
            {
                photos.map(photo => {
                    return (<>
                        <NavLink to={'/photos' + pageId}  key={pageId}>
                                <img
                                    width={"80px"}
                                    src={photo.preview}
                                    alt={`id ${photo.userId} photo`}/>

                         </NavLink>
                         <div>
                             <b>{photo.description}</b>
                             <DateText>{ dateParse.toStrings(photo.date) }</DateText>
                         </div>
                     </>
                    )
                })}
        </SomePhotosBlock>
            </>
    )
}

SomePhotos.propTypes = {
    photos: PropTypes.array,
    count: PropTypes.number,
    pageId: PropTypes.number,
}

export default BadgeHeaderHOC(SomePhotos);