import React, {useState, useEffect} from 'react';

import PropTypes from 'prop-types';

import Link from "../../instruments/link/Link";

import BadgeHeaderHOC from "../Widjet/BadgeHeader";
import BadgeSubHeader from "../Widjet/BadjeSubHeader";

import SinglePost from "./SinglePost";
import PostAddForm from "../../forms/PostAddForm";
import {reduxForm} from "redux-form";

const PostAddFormWall = reduxForm({form: "wallMessage"})(PostAddForm)

const Wall = ({posts, count, pageId, addPost, isOpen = false}) => {

    let [isOpenTextBox, setTextBoxStatus] = useState(isOpen)

    const handleShowTextBox = () =>  setTextBoxStatus(true)

    const handleAddPost = (value) => {
        addPost(pageId, value.text)
        setTextBoxStatus(false)
    }

    return (
        <>
            <BadgeSubHeader count={count} name={(count === 1) ? "post" : "posts"} link={"/wall" + pageId} >
                <Link onClick={handleShowTextBox} linkName={"Write New Post"} />
            </BadgeSubHeader>
            {isOpenTextBox &&
                    <PostAddFormWall onSubmit={handleAddPost}/>
            }
            {
                posts.map( (post) => {
                    return <SinglePost key={post.postId} post={post} />
                })
            }
        </>
    )
}

Wall.propTypes = {
    posts: PropTypes.array,
    count: PropTypes.number,
    isAuth: PropTypes.bool,
    pageId: PropTypes.number,

    addPost: PropTypes.func
}

export  default BadgeHeaderHOC(Wall)