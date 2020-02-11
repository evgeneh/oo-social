import React, {useEffect} from 'react';
import {connect} from "react-redux";

import {compose} from "redux";
import {withRouter} from "react-router-dom";

import Users from "./Users";

import {beginFollowing, endFollowing, getFriendsByPage, setCurrentPage} from "../../redux/reducers/users-reducer";
import Preloader from "../instruments/Preloader";
import withLoginRedirect from "../login-register/LoginRedirectHOC";


const UsersAPI = (props) => {

    console.log(props.match.params)

    useEffect(() => usersUpdate(), [props.match.params.pageNo, props.match.params.userId, props.myId])

    let userId = props.match.params.userId ? props.match.params.userId : props.myId

    const usersUpdate = () => {
        {

            props.getFriendsByPage(props.match.params.pageNo, userId)
        }
    }

    return  <>
        {(props.isFetching) ? <Preloader /> : <Users pageName={"friends"} userId={userId} {...props}  />
    }</>

}

let mapStateToProps = (state) => {
    return {
        totalCount: state.users.totalCount,
        users: state.users.users,
        isFetching: state.users.isFetching,
        pageSize: state.users.pageSize,
        isToggling: state.users.isToggling,
        myId: state.auth.myId
    }
}

export default compose (withLoginRedirect, connect(mapStateToProps, {getFriendsByPage, setCurrentPage, beginFollowing, endFollowing}), withRouter) (UsersAPI)