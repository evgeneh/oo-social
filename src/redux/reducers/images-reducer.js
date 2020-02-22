import {mediaAPI} from "../../oosocial-api/api";
import {stopSubmit} from "redux-form";
import {Arrays} from "../../utils/array";

let initialState = {
    items: [],
    totalCount: 0,
    currentUploading: null,
    isProfilePhotoSet: false
}

const SET_PHOTOS = 'social-network/user-photos/SET_PHOTOS';
const SET_IMAGE_ORDER = 'social-network/user-photos/SET_IMAGE_ORDER';
const TOGGLE_PHOTO_SET = 'social-network/user-photos/TOGGLE_PHOTO_SET';
const ADD_DESCRIPTION = 'social-network/user-photos/ADD_DESCRIPTION'

export const imagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PHOTOS:
            return {
                ...state, items: [...action.photos], totalCount: action.count
            }
        case SET_IMAGE_ORDER:
            return {...state, currentUploading: action.order}
        case TOGGLE_PHOTO_SET:
            return {...state, isProfilePhotoSet: action.togglePhotoSet}
        case ADD_DESCRIPTION:
            return { ...state, items:  Arrays.findOneAndUpdate(state.items, "id", action.id, {description: action.description})
        }
        default:
            return state;
    }
}

const setPhotos = (photos, count) => {return {type: SET_PHOTOS, photos, count}}

export const getPhotosRequest = (userId) => async (dispatch) => {
        const response = await mediaAPI.getPhotos(userId);
        if (response.data.items)
            dispatch(setPhotos(response.data.items, response.data.totalCount))
}


//---action задаёт порядковый номер загруженного файла
const setUploadingImageOrder = (order) => {return {type: SET_IMAGE_ORDER, order}}

export const uploadPhotosRequest = (photos) => async (dispatch, getState) => {
    let i = 1;
    for (const item of photos) {
        dispatch(setUploadingImageOrder(i++))
        const response = await mediaAPI.savePhoto(item)
        if (response.data.resultCode === 0) {
        } else {
            dispatch(stopSubmit("upload_image", {_error: response.data.messages[0] || "Image loading error"}))
        }
    }
    dispatch(setUploadingImageOrder(null))
    const myId = getState().auth.myId
    dispatch(getPhotosRequest(myId))
}

const setProfilePhoto = (togglePhotoSet) => { return {type: TOGGLE_PHOTO_SET, togglePhotoSet}}

export const setImageAsProfilePhoto  = (id) => async (dispatch) => {
    dispatch(setProfilePhoto(true))
    const response = await mediaAPI.setAsProfilePhoto(id)
    if (response.data.resultCode === 0)
    {

        dispatch(setProfilePhoto(false))}
}

export const deletePhoto  = (id) => async (dispatch) => {
    dispatch(setProfilePhoto(true))
    const response = await mediaAPI.deletePhoto(id)
    if (response.data.resultCode === 0)
    {
        dispatch(getPhotosRequest(""))
        dispatch(setProfilePhoto(false))}
}

const addImageDescription = (id, description) => {return {type: ADD_DESCRIPTION, id, description}}

export const updateImageDescription = (id, description) => async (dispatch) =>{
    const response = await mediaAPI.updateImage(id, description)
    if (response.data.resultCode === 0)
    {
        dispatch(addImageDescription(id, description))
    }
}



