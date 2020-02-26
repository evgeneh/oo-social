import React, {useEffect, useRef} from 'react';

import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";

import ElementNameHeader from "../element-name-header/ElementNameHeader";
import Dialog from "./Dialog";
import {AddNewMessageRequest, GetMessagesRequest} from "../../../redux/reducers/dialogs-reducer";



const DialogContainer = ({match, myId, GetMessagesRequest, ...props}) => {

    let userId =( match.params.userId && match.params.userId !== 's') ? match.params.userId : myId;

    const handleMessagesChange= () => {
        //getMessagesRequest(userId)
        if (myId && userId === myId) {
            //getDialogList()
        }
        else {
            GetMessagesRequest(userId)
        }
    }

    useEffect(() => { handleMessagesChange()}, [match.params.userId, parseInt(userId)])

    return (<ElementNameHeader text={'dialog with id' + userId } >
        <Dialog myId={myId} messages={props.messages} owner={props.owner}
            sendMessage={props.AddNewMessageRequest} />
    </ElementNameHeader>)
}

const mapStateToProps = (state) => {
    return {
        //dialog state
        messages: state.dialog.messages,
        owner: state.dialog.owner,
        totalMessagesCount: state.dialog.totalMessagesCount,

        isAuth: state.auth.isAuth,
        myId: state.auth.myId
    }
}

export default compose(withRouter, connect(mapStateToProps, {
    AddNewMessageRequest,
    GetMessagesRequest
}))(DialogContainer)