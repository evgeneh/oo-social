import React, {useEffect, useState} from 'react';

import {connect} from "react-redux";
import {compose} from "redux";
import {NavLink, withRouter} from "react-router-dom";

import ElementNameHeader from "../element-name-header/ElementNameHeader";
import {ListContainerSection, SinglePostBody} from "../../instruments/styles/Styles";
import {LoginWelcomeText} from "../../login-register/LoginWelcome";


import styled from 'styled-components'
import Link from "../../instruments/link/Link";
import {GetDialogsRequest} from "../../../redux/reducers/dialogs-reducer";
import {dateParse} from "../../../utils/date";




const DialogList = ({dialogs}) => {

    if ( dialogs === undefined || ! dialogs || dialogs.length < 1 )
        return (
            <LoginWelcomeText>
                You have not dialogs yet, send message to your <NavLink to={'/friends'}>friend</NavLink>
            </LoginWelcomeText>
        )

    return (
        <>
            {
                dialogs.map( (dialog) => {
                    return <SinglePostBody imgWidth={100} key={dialog.lastMessage._id}>
                        <div>
                            <img src={dialog.user.photo} width={100} alt={dialog.user.id + " userpic"} />
                        </div>
                        <div><span>Dialog with</span>
                            <b><Link to={'/id' + dialog.user.id} linkName={dialog.user.fullName} /></b>
                            <NavLink to={'/dialog' + dialog.user.id}>
                                <div>Last message at {dateParse.toStrings(dialog.date) + " ("}
                                {(dialog.lastMessage.isRead) ? "read)" : "unread)"} <br/>
                                Open dialog
                                </div>
                            </NavLink>
                        </div>
                    </SinglePostBody>
                })
            }
        </>
    )
}




const MyDialogListContainer = ({myId, isFetching, dialogs, GetDialogsRequest}) => { //GetDialogsRequest

    useEffect(() => {
        let interval = setInterval(() => {
            if (!isFetching) {
                GetDialogsRequest()
            }
        }, 7000)
        return () => clearInterval(interval)
    }, [isFetching])

    return (<ElementNameHeader text={'my dialogs'}>
        <ListContainerSection>
            <DialogList myId={myId} dialogs={dialogs}/>
        </ListContainerSection>
    </ElementNameHeader>)
}

const mapStateToProps = (state) => {
    return {
        dialogsTotalCount: state.dialog.dialogsTotalCount,
        dialogs: state.dialog.dialogs,
        myId: state.auth.myId,
        isFetching: state.dialog.isFetching,
    }
}

export default compose(withRouter, connect(mapStateToProps, {

    GetDialogsRequest
}))(MyDialogListContainer)