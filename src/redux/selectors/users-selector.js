import {createSelector} from "reselect"

const getFriends = (state) => {
    return state.users.friends;
}

export const getSomeFriends = createSelector(getFriends, (friends) => {

    const users = friends.profiles;
    const COUNT = 4;
    if (users.length <= COUNT)
        return friends;
    else {
        let arr = [];
        let result = []

        for (let i = 0; i < COUNT; i++) {
            let index = Math.floor(Math.random() * users.length);
            while (arr.includes(index)) {
                index = (index + 1) % users.length;
            }
            arr.push(index);
            result.push(users[index])
        }
        return {profiles: result, totalCount: friends.totalCount};
    }

})