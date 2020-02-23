import React, {useEffect} from 'react';

import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";

import Wall from "./Wall";
import {getSomeWallPosts, getWallPosts} from "../../../redux/selectors/wall-selector";
import {AddNewPostRequest, getWallRequest} from "../../../redux/reducers/wall-reducer";
import ElementNameHeader from "../element-name-header/ElementNameHeader";

/*return <Wall text={"Wall"} isAuth={true} pageId={userId}
             posts={this.props.posts} count={this.props.postsCount}
             addPost={this.props.AddNewPostRequest}
/>*/

const WallContainer = ({match, myId, ...props}) => {


    const userId = match.params.userId ? match.params.userId : myId;

    const handleWall= () => {
        getWallRequest(userId)
    }

    useEffect(() => { handleWall()}, [match.params.userId, parseInt(userId)])

    return (<ElementNameHeader text={'id' + userId + ' wall'} >

         <Wall text={"Wall"} isAuth={props.isAuth} pageId={userId}
                     posts={props.posts} count={props.postsCount}
                     addPost={props.AddNewPostRequest} />
    </ElementNameHeader>)
}

const mapStateToProps = (state) => {
    return {
        //wall state
        posts: getWallPosts(state),
        postsCount: state.wall.totalCount,

        isAuth: state.auth.isAuth,
        myId: state.auth.myId
    }
}

export default compose(withRouter, connect(mapStateToProps, {
    AddNewPostRequest,
    getWallRequest
}))(WallContainer)