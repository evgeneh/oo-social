import {createSelector} from "reselect"
import {Arrays} from "../../utils/array";

const getFriends = (state) => {
    return state.users.friends;
}

export const getTogglingProfiles = (state) => {
    return state.users.isToggling;
}



export const getSomeFriends = createSelector(getFriends, (friends) => {

    return {profiles: Arrays.getSomeRandom(friends.profiles, 4),
        totalCount: friends.totalCount
    }

})
