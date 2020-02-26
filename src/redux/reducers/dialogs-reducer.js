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
    totalMessagesCount: 14
}

const SET_DIALOGS = 'social-network/dialogs/SET_DIALOGS'

const ADD_NEW_MESSAGE = 'social-network/dialogs/ADD_NEW_MESSAGE'


export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_DIALOGS:
            return {...state, messages: [...action.messages], totalMessagesCount: action.count, currentDialogId: action.dialogId, owner: {...action.owner}}

        case ADD_NEW_MESSAGE:
            let newState = {...state, messages: [action.message, ...state.messages], totalMessagesCount: state.totalMessagesCount + 1}

            return newState
        default:
            return state
    }
}

const setMessages = (messages, owner, dialogId, count) => {return {type: SET_DIALOGS, messages, owner, dialogId, count}}

export const addNewMessage = message =>{ return {type: ADD_NEW_MESSAGE, message}}

export const AddNewMessageRequest = (messageText, id) => async (dispatch, getState) => {
    //let {userId, text, date, dialogId}
    let dialogId = getState().dialog.currentDialogId
    let date = new Date().toISOString()
    let mess = {dialogId, text: messageText, userId: id, date }
    console.log(mess)
    let response = await  dialogAPI.sendMessage(mess)

    dispatch(addNewMessage({date, text: messageText, ownerId: getState().auth.myId}))
    dispatch(reset('dialogMessage'));
}

export const GetMessagesRequest = (id) => async (dispatch) => {
 let response = await dialogAPI.getDialog(id)

    if (response.data.resultCode === 0)
    {
        dispatch(setMessages(response.data.data.messages, response.data.data.owner,
            response.data.data.currentDialogId, response.data.data.totalMessagesCount))
    }
}


