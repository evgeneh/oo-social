import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";

import {getSomeFriends} from "../../redux/selectors/users-selector";
import {getProfileFollowingFetch, getProfileFull, getUserRating} from "../../redux/selectors/profile-selector";
import {getSomeWallPosts} from "../../redux/selectors/wall-selector";

import {getSomeImages} from "../../redux/selectors/photos-selector";

import {
    getProfileRequest,
    getStatusRequest,
    setStatusRequest,
    singleProfileFollow, singleProfileUnfollow,
    uploadPhoto,
    uploadProfile
} from "../../redux/reducers/profile-reducer";

import {getFriendsById} from "../../redux/reducers/users-reducer";
import {AddNewPostRequest, getWallRequest} from "../../redux/reducers/wall-reducer";

import {getPhotosRequest} from "../../redux/reducers/images-reducer";

import Profile from "./Profile";

import Preloader from "../instruments/Preloader";
import Wall from "./wall/Wall";

import withLoginRedirect from "../login-register/LoginRedirectHOC";


class ProfileAPI extends React.Component {

    state = {editMode: false}

    uploadUserProfile = () => {
        let uid = this.props.match.params.userId || this.props.myId;
        this.props.getStatusRequest(uid);
        this.props.getProfileRequest(uid);

        this.props.getFriendsById(1, uid);

        this.props.getWallRequest(uid)

        this.props.getPhotosRequest(uid);
    }

    setEditMode = (mode) => {
        this.setState({editMode: mode || false})
    }

    componentDidMount() {
        this.setEditMode(this.props.isEdit)
        this.uploadUserProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (prevProps.match.params.userId != this.props.match.params.userId)
            this.uploadUserProfile()

        if (prevProps.profileUpdateFetching && !this.props.profileUpdateFetching)
            this.setEditMode(false)

        if (!prevProps.profileUpdateFetching && this.props.profileUpdateFetching)
            this.setEditMode(true)
    }

    render() {
        let {match, getProfileRequest, getFriendsById, isEdit, ...newProps} = this.props;


        if (this.props.profileFetch) return (<Preloader/>)
        else return (
            <Profile  {...newProps} isEdit={this.state.editMode}
                      isOwner={(this.props.isAuth && ((match.params.userId == this.props.myId) || isEdit))}>
                <Wall text={"Wall"} isAuth={true} pageId={newProps.user.userId}
                      posts={this.props.posts} count={this.props.postsCount}
                      addPost={this.props.AddNewPostRequest}
                />
            </Profile>)
    }
}

let mapStateToProps = (state) => {
    return {
        user: getProfileFull(state),
        statusText: state.profile.statusText,
        profileUpdateFetching: state.profile.profileUpdateFetching,
        myId: state.auth.myId,
        isAuth: state.auth.isAuth,

        profileFetch: state.profile.profileFetch,
        profileFollowingFetch: getProfileFollowingFetch(state),

        friends: getSomeFriends(state),
        rating: getUserRating(state),

        //wall state
        posts: getSomeWallPosts(state),
        postsCount: state.wall.totalCount,

        //photos state
        photos: getSomeImages(state),
        photosTotalCount: state.photos.totalCount
    }
}

export default compose(withRouter, withLoginRedirect, connect(mapStateToProps, {
    setStatusRequest,
    getProfileRequest,
    getStatusRequest,
    uploadProfile,
    uploadPhoto,
    getFriendsById,

    singleProfileFollow,
    singleProfileUnfollow,

    AddNewPostRequest,
    getWallRequest,

    getPhotosRequest
}))(ProfileAPI)