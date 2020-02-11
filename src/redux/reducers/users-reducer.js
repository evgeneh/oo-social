import {usersAPI} from "../../oosocial-api/api";
import {Arrays} from "../../utils/array";

const initialState={
    users: [
        { id: 0, name: "home", status: "i'm fattest", followed: false, photos: {small: null, large:null}} ,
        { id: 1, name: "street", status: "i'm smallest", followed: true, photos: {small: null, large:null}},
        { id: 2, name: "aubo rdadje", status: "i'm smallest", followed: true, photos: {small: null, large:null}},
        { id: 3, name: "Ofre nmd", status: "i'm smallest", followed: true, photos: {small: null, large:null}}
    ],
    totalCount: 600,
    error: null,

    currentPage: 1,
    pageSize: 10,

    isFetching: false,

    isToggling: [],

    friends: {
        profiles: [],
        totalCount: 0
    }
}

const TOGGLE_FETCHING = 'social-network/users-search/TOGGLE_FETCHING'
const SET_USERS = 'social-network/users-search/SET_USERS'
const SET_USERS_PAGE = 'social-network/users-search/SET_USERS_PAGE'

const SET_TOGGLE_FOLLOWING = 'social-network/users-search/SET_TOGGLE_FOLLOWING'
const CHANGE_FOLLOWING_STATUS = 'social-network/users-search/CHANGE_FOLLOWING_STATUS'

const SET_FRIENDS = 'social-network/users-search/SET_FRIENDS'


export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FETCHING:
            return {...state, isFetching: action.isFetching}
        case SET_USERS:
            return {...state, users: [...action.users], totalCount: action.count}
        case SET_USERS_PAGE:
            return {...state, currentPage: action.page}

        case SET_TOGGLE_FOLLOWING:
            if (action.isToggling)
                return {...state, isToggling: [action.id, ...state.isToggling]}
            else return {
                ...state, isToggling: state.isToggling.filter((id) => {
                    return (id !== action.id)
                })}
        case CHANGE_FOLLOWING_STATUS:
            return {
                ...state, users: Arrays.findOneAndUpdate(state.users, "id", action.id, {followed: action.isFollow})
                }

        case SET_FRIENDS:
            return {...state, friends:{ profiles: [...action.friends], totalCount: action.totalCount}}

        default:
            return state
    }
}

const setFetching = (isFetching) => {return {type:TOGGLE_FETCHING, isFetching}}
const setUsers = (users, count) => {return {type: SET_USERS, users, count}}

export const setCurrentPage = (page) => {return {type: SET_USERS_PAGE, page}}

export const getUsers = (page) => async (dispatch) => {
        dispatch(setFetching(true))

        let response = await usersAPI.getByPage(page);
        if (response.data.items)
        {
                dispatch(setUsers(response.data.items, response.data.totalCount))
                dispatch(setFetching(false))
        }
}

//add user id to list of just following users
const setToggleFollowing = (isToggling, id) => { return {type: SET_TOGGLE_FOLLOWING, isToggling, id}}

//set following status for user by id
const setFollowing = (id, isFollow) => { return {type: CHANGE_FOLLOWING_STATUS, id, isFollow}
}

//общий метод для запроса фолловинга или анфолловинга, передаём метод запроса к api
//и состояние фолоовинга, которое надо установить в state
const followOrUnFollow = async (id, followMethod, isFollowing, dispatch) =>  {
    dispatch(setToggleFollowing(true, id))
    // запрос к апи
    let response = await followMethod(id)
    if (response.data.resultCode === 0) {
        //unfollow action createrl
        dispatch(setFollowing(id, isFollowing))
        //stop freezing follow button for current user
        dispatch(setToggleFollowing(false, id))

    }
}

export const beginFollowing = (id) => {
    return async (dispatch) => {
        followOrUnFollow(id, usersAPI.follow.bind(usersAPI), true, dispatch)
    }
}

export const endFollowing = (id) => {
    return async (dispatch) => {
        followOrUnFollow(id, usersAPI.unfollow.bind(usersAPI), false, dispatch)
    }
}


//--------------------- friends request------------------------------------
const getFriendsRequest = async (page, id, setFriendsMethod, dispatch) => {
    const response = await usersAPI.getFriendsById(page, id);
    if (response.data.resultCode === 0)
        dispatch(setFriendsMethod(response.data.items, response.data.totalCount))
}

const setFriends = (friends, totalCount) => {return {type: SET_FRIENDS, friends, totalCount}}

export const getFriendsByPage = (page, id) => async (dispatch) => {
    dispatch(setFetching(true))
    const val = await getFriendsRequest(page, id, setUsers, dispatch);
    dispatch(setFetching(false))
}

export const getFriendsById = (page, id) => async (dispatch) => {
    getFriendsRequest(page, id, setFriends, dispatch);
}




