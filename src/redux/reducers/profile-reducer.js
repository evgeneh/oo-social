import {profileAPI} from '../../oosocial-api/api'
import {stopSubmit} from 'redux-form'

let initialState = {
    user: {},
    communities: ['community of people who promised himself go to sleep as soon as back from work',
                    '====== PhYSiCaL fAcUlTy ArE bEsToFtHeBeStOfThEbEsTs!!!! =====',
                    '&#9733;&#9733;&#9733; all new Films of 2008. Watch online! &#9733;&#9733;&#9733;',
                    'only VIP'],
    statusText: '',

    profileUpdateFetching: false,

    profileFetch: true
    /*
    posts: [
        {text: 'post1', like: 1}, {text: 'post2', like: 2}
    ]*/
}

const SET_STATUS = 'social-network/user-profile/SET_STATUS'
const SET_PROFILE = 'social-network/user-profile/SET_PROFILE'
const SET_PHOTO = 'social-network/user-profile/SET_PHOTO'

const UPDATE_PROFILE_FETCHING = 'social-network/user-profile/UPDATE_PROFILE_FETCHING'
const GET_PROFILE_FETCH_TOGGLE = 'social-network/user-profile/GET_PROFILE_FETCH_TOGGLE'

export let profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_PROFILE:
            return {...state, user: action.userProfile}

        case SET_STATUS:
            return {...state, statusText: action.statusText}
        case SET_PHOTO:
            let newState = {...state, user: {...state.user, photos: action.photos}}
            return newState
        case UPDATE_PROFILE_FETCHING:
            return {...state, profileUpdateFetching: action.isFetching}

        case GET_PROFILE_FETCH_TOGGLE:
            console.log(action.isFetching)
            return {...state, profileFetch: action.isFetching}
        default:
            return state;
    }
}

const setStatus = (statusText) => { return {type: SET_STATUS, statusText} }

const setProfile = (userProfile) => { return {type: SET_PROFILE, userProfile} }

const uploadPhotoSuccess = (photos) => { return {type: SET_PHOTO, photos} }

const uploadProfileFetching = (isFetching) => { return {type: UPDATE_PROFILE_FETCHING, isFetching} }


const getProfileFetch = (isFetching) => {return {type: GET_PROFILE_FETCH_TOGGLE, isFetching}}
//тестовый вариант санккриэйтора для локальной БД
export const getProfileRequest = (id) => async (dispatch) => {
    dispatch(getProfileFetch(true))
    const response = await profileAPI.getUserProfile(id)

    if (response.data)
    {
        dispatch(setProfile(response.data))
        dispatch(getProfileFetch(false))
    }
}


export const setStatusRequest = (statusText) => async (dispatch) => {
    const response = await profileAPI.setStatus(statusText)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(statusText))
    }
}

export const getStatusRequest = (id) => async (dispatch) => {
    const response = await profileAPI.getStatus(id)
        dispatch(setStatus(response.data))
}


export const uploadProfile = (profile) => async (dispatch, getState) => {
    //get current user id in state for loading my new profile page
    const myId = getState().auth.myId
    dispatch(uploadProfileFetching(true))
    const response = await  profileAPI.setProfile(profile)
    if (response.data.resultCode === 0)
    {
        //alert(getContactError("Invalid url format (Contacts->Facebook)"))
        dispatch(getProfileRequest(myId))
        dispatch(uploadProfileFetching(false))
    }
    else {
        //parse error message to get info about current field
        let errMessage = (response.data.messages && (response.data.messages.length > 0)) ? response.data.messages[0] : 'update profile error'
        let contactError = getContactError(errMessage)
        if (contactError)
        {
            const submitERROR = JSON.parse(`{"${contactError}":"${errMessage}"}`)
            //dispatch(stopSubmit('updateProfile', submitERROR))
            dispatch(stopSubmit('updateProfile', {"contacts": submitERROR}))
        }
        else
            dispatch(stopSubmit('updateProfile', {_error: errMessage}))
    }
}


//parse error message while form update
const getContactError = (message) => {
    let contactsPos = -1
    contactsPos  = message.indexOf('Contacts->')
    if (contactsPos > 0)
    {
        let result = message.slice(contactsPos + 10)
        result = result.slice(0, result.indexOf(')'))
        if (result.length > 1)
            return result.toLowerCase()
    }
    return null
}

export const uploadPhoto = (photo) => async (dispatch) => {
    const response = await profileAPI.savePhoto(photo)

    if (response.data.resultCode === 0) {
        dispatch(uploadPhotoSuccess(response.data.photos))
    }
    else
    {
        dispatch(stopSubmit("upload_image", {_error: response.data.messages[0] || "Image loading error"}))
    }
}

