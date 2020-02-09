import {getAuthRequest} from "./auth-reducer";

let initialState = {
    initialize: false
}

const SET_INITIALIZE = 'social-network/init/SET_INITIALIZE'

export let initReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_INITIALIZE:
            return {...state, initialize: true}
        default:
            return state;
    }
}

let setInitSuccess = () => { return {type: SET_INITIALIZE} }

//инициализируем приложение, запрашиваем на сервере статус авторизации
export const initApp = () => (dispatch) => {
    dispatch(getAuthRequest()).then( () => {
        dispatch(setInitSuccess())
}).catch ( () => alert("Sever is not available now :("))

}

