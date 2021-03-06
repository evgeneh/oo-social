import React, {useEffect} from 'react';

import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";

import {ListContainerSection} from "../../instruments/styles/Styles";

import Wall from "./Wall";
import {getWallPosts} from "../../../redux/selectors/wall-selector";
import {AddNewPostRequest, getWallRequest} from "../../../redux/reducers/wall-reducer";
import ElementNameHeader from "../element-name-header/ElementNameHeader";

const WallContainer = ({match, myId, ...props}) => {

    const userId = match.params.userId ? match.params.userId : myId;

    const handleWall = () => {
        props.getWallRequest(userId)
    }

    useEffect(() => {
        handleWall()
    }, [match.params.userId, parseInt(userId)] )

    return (<ElementNameHeader text={'id' + userId + ' wall'}>
        <ListContainerSection>
            <Wall text={"Wall"} isAuth={props.isAuth} pageId={userId}
                  posts={props.posts} count={props.postsCount}
                  addPost={props.AddNewPostRequest} isOpen={true}/>
        </ListContainerSection>
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