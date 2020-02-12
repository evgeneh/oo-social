export const SET_TOGGLE_FOLLOWING = 'social-network/users-following/SET_TOGGLE_FOLLOWING'

//add user id to list of just following users
const setToggleFollowing = (isToggling, id) => { return {type: SET_TOGGLE_FOLLOWING, isToggling, id}}

//общий метод для запроса фолловинга или анфолловинга, передаём метод запроса к api
//и состояние фолоовинга, которое надо установить в state
export const followOrUnFollowG = async (id, followMethod, isFollowing, setFollowing, dispatch) =>  {
    dispatch(setToggleFollowing(true, id))
    // запрос к апи
    let response = await followMethod(id)
    if (response.data.resultCode === 0) {
        //unfollow action createrl
        dispatch(setFollowing(id, isFollowing))
        //stop freezing follow button for current user
        dispatch(setToggleFollowing(false, id))

    }
}