import {dialogAPI} from "../../oosocial-api/api";
import {Arrays} from "../../utils/array";

let initialState = {
    alerts: [ {name: 'Friends', count: 0 }, {name: 'Photos', count: 0},
        {name: 'Wall', count: 0 }, {name: 'Messages', count: 0}, {name: 'Notes', count: 0},
        {name: 'Groups',  count: 0 }
    ]}

const SET_MESSAGES_COUNT = 'social-network/alerts/SET_MESSAGES_COUNT'

export let requestsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_MESSAGES_COUNT:
        return {...state,
            alerts: Arrays.findOneAndUpdate(state.alerts, "name", "Messages", {count: action.messagesCount})}
        default: return state;
    }

}

const setUnreadMessages = (messagesCount) => {
    return {type: SET_MESSAGES_COUNT, messagesCount}
}

export const updateAlerts = () => async (dispatch) =>{
    let response = await dialogAPI.getMessagesUnread()
    if (response.data.resultCode === 0) {
        dispatch(setUnreadMessages(response.data.messagesCount))
    }
}