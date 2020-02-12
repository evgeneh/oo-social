import {createSelector} from "reselect"

import {getTogglingProfiles} from "./users-selector";


export const getProfileId = (state) => {
    return  state.profile.user.userId;
}

export const getProfile = (state) => {
    return  state.profile.user;
}

const getFollowStatus = (state) => {
    return state.profile.isProfileFollow;
}

export const getProfileFullName = (state) => {
    return  state.profile.user.fullName;
}

const getMyId = (state) => {
    return state.auth.myId;
}

export const getProfileFollowingFetch = createSelector(getTogglingProfiles, getProfileId, (isTogglingArray, userId) => {
    return isTogglingArray.some( (togglingId) => {return (togglingId === userId)} )
})

export const getProfileFull = createSelector(getProfile, getFollowStatus, getMyId, (user, followStatus, myId) =>{

    let isFollow = followStatus
    if ((!user.userId || !myId) || (myId === user.userId))
        isFollow = false;
    return {...user, isFollow}
})




export const getUserRating = createSelector(getProfile, (user) => {

    if (! user.userId) return null
    let filledParams = 1;
    let totalParams = 1;

    if (user.aboutMe) filledParams++;
    totalParams++;

    if (user.photos.large)
        filledParams++;
    totalParams++;

    Object.keys(user.contacts).map((key) => {
        if (user.contacts[key]) filledParams++;
        totalParams++;
    })

    return Math.trunc(100 * filledParams / totalParams) ;

})

