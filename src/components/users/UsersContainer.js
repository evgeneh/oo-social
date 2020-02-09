import React, {useEffect} from 'react';
import {connect} from "react-redux";

import {compose} from "redux";
import {withRouter} from "react-router-dom";

import Users from "./Users";

import {beginFollowing, endFollowing, getUsers, setCurrentPage} from "../../redux/reducers/users-reducer";
import Preloader from "../instruments/Preloader";


const UsersAPI = (props) => {

    useEffect(() => usersUpdate(), [props.match.params.pageNo, props.myId])

    const usersUpdate = () => {
       // if ( Math.ceil(this.props.totalCount / this.props.pageSize)  >= (this.props.match.params.pageNo || 1))
        {
            props.getUsers(props.match.params.pageNo )
        }
    }
    return  <>
        {(props.isFetching) ? <Preloader /> : <Users pageName={"users"} {...props} />
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

export default compose (connect(mapStateToProps, {getUsers, setCurrentPage, beginFollowing, endFollowing}), withRouter) (UsersAPI)