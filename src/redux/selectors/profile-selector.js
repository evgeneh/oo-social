import {createSelector} from "reselect"

export const getProfile = (state) => {
    return  state.profile.user;
}

const getFollowStatus = (state) => {
    return state.profile.isProfileFollow;
}

const getMyId = (state) => {
    return state.auth.myId;
}

export const getProfileFull = createSelector(getProfile, getFollowStatus, getMyId, (user, followStatus, myId) =>{

    let isFollow = followStatus
    if ((!user.userId || !myId) || (myId === user.userId))
        isFollow = false;
    return {...user, isFollow}
})

export const getProfileFullName = (state) => {
    return  state.profile.user.fullName;
}


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
    console.log(filledParams + " " + totalParams)

    return Math.trunc(100 * filledParams / totalParams) ;

})

