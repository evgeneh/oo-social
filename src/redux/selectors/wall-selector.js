import {createSelector} from "reselect"

export const getWallPosts = (state) => {
    return state.wall.posts;
}

export const getSomeWallPosts = createSelector(getWallPosts, (posts) => {

return posts.slice(0, 10)

})