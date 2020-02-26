import {reset} from 'redux-form';
import {dialogAPI} from "../../oosocial-api/api";

const initialState={
    currentDialogId: null,
    owner: {userId: 2, photo: "https://s5o.ru/storage/simple/ru/edt/82/57/c6/1b/ruef2b9f9c218.jpg", fullName: "Eldar Sh"},
    messages: [

        { date: "2020-02-10T22:06:18.762Z", text: "Hi.", ownerId: 1 },
        { date: "2020-02-10T22:06:17.762Z", text: "Hello, my friend\n:)",ownerId: 2  },
        { date: "2020-02-01T22:06:17.762Z", text: "Hello, my friend111111111111111111111111111111111 eeee\r\n:)", ownerId: 1  }

    ],
    totalMessagesCount: 14,
    isFetching: false,
    isMessaging: false
}

const SET_DIALOGS = 'social-network/dialogs/SET_DIALOGS'

const ADD_NEW_MESSAGE = 'social-network/dialogs/ADD_NEW_MESSAGE'

const TOGGLE_FETCHING_UPDATE = 'social-network/dialogs/TOGGLE_FETCHING_UPDATE'

const TOGGLE_FETCHING_MESSAGING = 'social-network/dialogs/TOGGLE_FETCHING_UPDATE'



export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_DIALOGS:
            return {...state, messages: [...action.messages], totalMessagesCount: action.count, currentDialogId: action.dialogId, owner: {...action.owner}}

        case ADD_NEW_MESSAGE:
            return {...state, messages: [action.message, ...state.messages], totalMessagesCount: state.totalMessagesCount + 1}
        case TOGGLE_FETCHING_UPDATE:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_FETCHING_MESSAGING:
            return {...state, isMessaging: action.isFetching}
        default:
            return state
    }
}

const setMessages = (messages, owner, dialogId, count) => {return {type: SET_DIALOGS, messages, owner, dialogId, count}}

export const addNewMessage = message =>{ return {type: ADD_NEW_MESSAGE, message}}

const toggleFetching = isFetching => { return {type: TOGGLE_FETCHING_UPDATE, isFetching}}

const toggleMessaging = isFetching => { return {type: TOGGLE_FETCHING_MESSAGING, isFetching}}

export const AddNewMessageRequest = (messageText, id) => async (dispatch, getState) => {
    //let {userId, text, date, dialogId}
    let dialogId = getState().dialog.currentDialogId
    let date = new Date().toISOString()

    //   forming body of send message request
    let messBody = {dialogId, text: messageText, userId: id, date }

    dispatch(toggleMessaging(true))
    let response = await  dialogAPI.sendMessage(messBody)

    dispatch(addNewMessage({date, text: messageText, ownerId: getState().auth.myId}))
    dispatch(toggleMessaging(false))
    dispatch(reset('dialogMessage'));
}



export const GetMessagesRequest = (id) => async (dispatch) => {
 dispatch(toggleFetching(true))
 let response = await dialogAPI.getDialog(id)

    if (response.data.resultCode === 0)
    {
        dispatch(setMessages(response.data.data.messages, response.data.data.owner,
            response.data.data.currentDialogId, response.data.data.totalMessagesCount))
    }
    dispatch(toggleFetching(false))
}


