//import {wallAPI} from "../../oosocial-api/api";

const initialState={
    currentDialogId: 4754542,
    owner: {userId: 2, photo: "https://s5o.ru/storage/simple/ru/edt/82/57/c6/1b/ruef2b9f9c218.jpg", fullName: "Eldar Sh"},
    messages: [

        { date: "2020-02-10T22:06:18.762Z", text: "Hi.", myPost: true},
        { date: "2020-02-10T22:06:17.762Z", text: "Hello, my friend\n:)", myPost: false  },
        { date: "2020-02-01T22:06:17.762Z", text: "Hello, my friend111111111111111111111111111111111 eeee\r\n:)", myPost: false  }

    ],
    totalMessagesCount: 14
}

const SET_DIALOGS = 'social-network/dialogs/SET_DIALOGS'

const ADD_NEW_MESSAGE = 'social-network/dialogs/ADD_NEW_MESSAGE'


export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_DIALOGS:
            return {...state, messages: [...action.messages], totalMessagesCount: action.count, currentDialogId: action.userId}

        case ADD_NEW_MESSAGE:
            let newState = {...state, messages: [action.message, ...state.messages], totalMessagesCount: state.totalMessagesCount + 1}

            return newState
        default:
            return state
    }
}

const setMessages = (messages, owner, dialogId, count) => {return {type: SET_DIALOGS, messages, owner, dialogId, count}}

export const addNewMessage = message =>{ return {type: ADD_NEW_MESSAGE, message}}

export const AddNewMessageRequest = (messageText, id) => async (dispatch) => {

    let mess = {myPost :true, text: messageText, date: new Date().toISOString() }
    await new Promise(resolve => setTimeout(resolve, 1000))

    dispatch(addNewMessage(mess))
}





