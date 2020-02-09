import React, {useEffect} from 'react';

import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";

import {getPhotosRequest, uploadPhotosRequest} from "../../redux/reducers/images-reducer";
import {getProfileRequest} from "../../redux/reducers/profile-reducer";

import {getPhotosCount, getSortedImages} from "../../redux/selectors/photos-selector";
import {getProfileFullName} from "../../redux/selectors/profile-selector";

import Photos from "./Photos";

const PhotosContainer = ({myId, getPhotosRequest, getProfileRequest, isAuth, ...props}) => {

    useEffect(() => {handlePhotos()}, [props.match.params.userId])

    const userId = props.match.params.userId ? props.match.params.userId : myId;

    const handlePhotos = () => {
        getProfileRequest(userId);
        getPhotosRequest(userId);
    }

    return <Photos {...props} userId={userId} isOwner={isAuth && (userId === myId)} />
}

const mapStateToProps = (state) => {
    return {
        photos: getSortedImages(state),
        totalCount: getPhotosCount(state),
        myId: state.auth.myId,
        isAuth: state.auth.isAuth,
        currentUploading: state.photos.currentUploading,

        fullName: getProfileFullName(state)
    }
}

export default compose(withRouter, connect(mapStateToProps, {getPhotosRequest, getProfileRequest, uploadPhotosRequest})) (PhotosContainer)