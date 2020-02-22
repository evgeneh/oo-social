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
    grid-template-columns: 90px auto;
`;

const DateText = styled.span`
    color:grey
`

const PictureTitle = styled.div`
    word-break: break-word;
    font-weight: bold;
`

const Description = ({photo}) => {
    return(
    (photo.description.length > 51) ?

        <>{photo.description.slice(0, 50)}&hellip;</>
        :
        <>{photo.description}</>
    )
}

//show some photos on profile page
const SomePhotos = ({photos, count, pageId}) => {

    return (
        <>
            <BadgeSubHeader count={count} name={(count === 1) ? "photo" : "photos"} link={"/photos" + pageId} />
        <SomePhotosBlock >
            {
                photos.map(photo => {
                    return (
                        <>
                        <NavLink key={photo.id} to={'/photos' + pageId}  key={pageId}>
                                <img
                                    width={"80px"}
                                    src={photo.preview}
                                    alt={`id ${photo.userId} photo`}/>

                         </NavLink>
                         <div key={photo.id} >
                             <PictureTitle><Description photo={photo}/></PictureTitle> <br/>
                             <DateText>Uploaded { dateParse.toStrings(photo.date) }</DateText>
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