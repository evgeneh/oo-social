import {createSelector} from "reselect"

const getFriends = (state) => {
    return state.users.friends;
}

export const getTogglingProfiles = (state) => {
    return state.users.isToggling;
}



export const getSomeFriends = createSelector(getFriends, (friends) => {

    return {profiles: Array.getSomeRandom(friends.profiles, 4),
        totalCount: friends.totalCount
    }

})
