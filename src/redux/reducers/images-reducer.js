import {mediaAPI} from "../../oosocial-api/api";
import {stopSubmit} from "redux-form";

let initialState = {
    items: [],
    totalCount: 0,
    currentUploading: null
}

const SET_PHOTOS = 'social-network/user-photos/SET_PHOTOS';
const SET_IMAGE_ORDER = 'social-network/user-photos/SET_IMAGE_ORDER';

export const imagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PHOTOS:
            return {
                ...state, items: [...action.photos], totalCount: action.count
            }
        case SET_IMAGE_ORDER:
            return {...state, currentUploading: action.order}
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

const setUploadingImageOrder = (order) => {return {type: SET_IMAGE_ORDER, order}}

export const uploadPhotosRequest = (photos) => async (dispatch, getState) => {
    let i = 1;
    for (const item of photos) {
        dispatch(setUploadingImageOrder(i++))
        const response = await mediaAPI.savePhoto(item)
        if (response.data.resultCode === 0) {
        } else {
            //dispatch(stopSubmit("upload_image", {_error: response.data.messages[0] || "Image loading error"}))
        }
    }
    dispatch(setUploadingImageOrder(null))
    const myId = getState().auth.myId
    dispatch(getPhotosRequest(myId))
}



