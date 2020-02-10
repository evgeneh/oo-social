import {createSelector} from "reselect";

import {Arrays} from "../../utils/array";

const getPhotos = (state) => {
    return state.photos.items;
}

export const getPhotosCount = (state) => {
    return state.photos.totalCount;
}

export const getSortedImages = createSelector(getPhotos, getPhotosCount, (photos, count) => {

        return Arrays.sortBy(photos, "date",  true);
})