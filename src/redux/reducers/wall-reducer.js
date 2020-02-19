import {usersAPI} from "../../oosocial-api/api";


const initialState={
    userId: 2, //id of wall owner, post owner id can equals with wall owner
    posts: [
        { postId: 1, date: "2020-02-10T22:06:17.762Z", text: "Hello, my friend\n:)", owner: {userId: 2, photo: "https://s5o.ru/storage/simple/ru/edt/82/57/c6/1b/ruef2b9f9c218.jpg", fullName: "Eldar Sh"} }
    ],
    totalCount: 14,

    isFetching: false //waiting for new post uploaded
}

const TOGGLE_FETCHING = 'social-network/wall/TOGGLE_FETCHING'
const SET_POSTS = 'social-network/wall/SET_POSTS'

const ADD_NEW_POST = 'social-network/wall/ADD_NEW_POST'


export const wallReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FETCHING:
            return {...state, isFetching: action.isFetching}
        case SET_POSTS:
            return {...state, posts: [...action.posts], totalCount: action.count, userId: action.userId}

        case ADD_NEW_POST:
            return {...state, posts: [action.post, ...state.posts], totalCount: state.totalCount + 1}

        default:
            return state
    }
}

const setFetching = (isFetching) => {return {type: TOGGLE_FETCHING, isFetching}}

const setPosts = (posts, count) => {return {type: SET_POSTS, posts, count}}

export const addNewPost = post =>{ return {type: ADD_NEW_POST, post}}






