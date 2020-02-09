import {createSelector} from "reselect";

const getPhotos = (state) => {
    return state.photos.items;
}

export const getPhotosCount = (state) => {
    return state.photos.totalCount;
}

export const getSortedImages = createSelector(getPhotos, getPhotosCount, (photos, count) => {

        return photos;
})