import React, {useEffect} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";

import {getSomeFriends} from "../../redux/selectors/users-selector";
import {getProfile, getUserRating} from "../../redux/selectors/profile-selector";

import {
    getProfileRequest,
    getStatusRequest,
    setStatusRequest,
    uploadPhoto,
    uploadProfile
} from "../../redux/reducers/profile-reducer";

import {getFriendsById} from "../../redux/reducers/users-reducer";

import Profile from "./Profile";
import Preloader from "../instruments/Preloader";
import withLoginRedirect from "../login-register/LoginRedirectHOC";



class ProfileAPI extends React.Component {//= ({match, getProfile, getStatusRequest, ...props}) => {

     state = {editMode: false}

    uploadUserProfile  = () => {
        let uid = this.props.match.params.userId || this.props.myId;
        this.props.getStatusRequest(uid);
        this.props.getProfileRequest(uid);
        this.props.getFriendsById(1, uid);
    }

    setEditMode = (mode) => {
         this.setState({editMode: mode || false})
    }

    componentDidMount() {
        this.setEditMode(this.props.isEdit)
        this.uploadUserProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (prevProps.match.params.userId  != this.props.match.params.userId )
            this.uploadUserProfile()

        if (prevProps.profileUpdateFetching  && ! this.props.profileUpdateFetching)
            this.setEditMode(false)

        if (! prevProps.profileUpdateFetching  &&  this.props.profileUpdateFetching)
            this.setEditMode(true)
    }

    //добавить прелоадер при загрузке профиля?
    render() {
        if  (this.props.profileFetch) return (<Preloader />)
        else return <Profile friends={this.props.friends} rating={this.props.rating}
                        user={this.props.user} setStatus={this.props.setStatusRequest} statusText={this.props.statusText}
                        isEdit={this.state.editMode}
                        uploadPhoto={this.props.uploadPhoto} uploadProfile={this.props.uploadProfile}
                        profileUpdateFetching={this.props.profileUpdateFetching}
                        isOwner={(this.props.isAuth && ( (this.props.match.params.userId == this.props.myId) || this.props.isEdit ))}/>
    }
}

let mapStateToProps = (state) => {
    return {
        user: getProfile(state),
        statusText: state.profile.statusText,
        profileUpdateFetching: state.profile.profileUpdateFetching,
        myId: state.auth.myId,
        isAuth: state.auth.isAuth,

        profileFetch: state.profile.profileFetch,

        friends: getSomeFriends(state),
        rating: getUserRating(state)
    }
}

export default compose(withRouter, connect(mapStateToProps, {
    setStatusRequest,
    getProfileRequest,
    getStatusRequest,
    uploadProfile,
    uploadPhoto,
    getFriendsById
}))(ProfileAPI)