import {authAPI} from "../../oosocial-api/api";
import {stopSubmit} from 'redux-form'

let initialState = {
    myId: null,
    email: null,
    login: null,
    isAuth: false,

    isNewUserRegistered: false,
    previousLocation: null
}

const SET_AUTH = "social-network/auth/SET_AUTH"
const DELETE_AUTH = "social-network/auth/DELETE_AUTH"
const NEW_USER_REGISTER_SUCCESS = "social-network/auth/NEW_USER_REGISTER_SUCCESS"
const SET_PREVIOUS_LOCATION = "social-network/auth/SET_PREVIOUS_LOCATION"

export let authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_AUTH:
            return {...state, ...action.data, isAuth: true}
        case DELETE_AUTH:
            return {...initialState}
        case NEW_USER_REGISTER_SUCCESS:
            return {...state, isNewUserRegistered: true}
        case SET_PREVIOUS_LOCATION:
            return {...state, previousLocation: action.path}

        default:
            return state;
    }
}

export const setLocation = (path) => {return {type: SET_PREVIOUS_LOCATION, path }}

const setAuthParams = (myId, email, login) => { return {type: SET_AUTH, data: {myId, email, login}} }
const clearAuthParams = () => {return {type: DELETE_AUTH}}

//инициализируем приложение, запрашиваем на сервере статус авторизации
export const getAuthRequest = () => async (dispatch) => {
    let response = await authAPI.me()

    if (response.data.resultCode === 0)
    {
        let {id, email, login} = response.data.data
        dispatch(setAuthParams(id, email, login))
    }
    else dispatch(clearAuthParams())
}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0)
    {
        dispatch(clearAuthParams())
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe)

    if (response.data.resultCode === 0)
    {
        dispatch(getAuthRequest())
       // логинизация успешно выполнена
    }
    else
    {
        let err = (response.data.messages && (response.data.messages.length > 0) ? response.data.messages[0] : 'login error')
        dispatch(stopSubmit('login', {_error: err}))
    }
}

const RegistrationSuccess = () => {return {type: NEW_USER_REGISTER_SUCCESS}}

//(values.email, values.password, values.login, values.fullName)
export const register = (email, password, login, fullName) => async (dispatch) => {
    let response = await authAPI.register(email, password, login, fullName)
    if (response.data.resultCode === 0) {
        debugger
        dispatch(RegistrationSuccess());
    }
    else {
        dispatch(stopSubmit("register", {_error: response.data.messages[0] || "Registration error"}))
    }

    //register
}

