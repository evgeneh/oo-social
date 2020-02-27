import React, {useEffect, useState} from 'react';

import {connect} from "react-redux";
import {compose} from "redux";
import { withRouter} from "react-router-dom";

import {GetDialogsRequest} from "../../../../redux/reducers/dialogs-reducer";

import {ListContainerSection} from "../../../instruments/styles/Styles";

import ElementNameHeader from "../../element-name-header/ElementNameHeader";
import DialogsList from "./DialogsList";


const MyDialogListContainer = ({myId, isFetching, dialogs, GetDialogsRequest}) => { //GetDialogsRequest

    useEffect(() => {
        let interval = setInterval(() => {
            if (!isFetching) {
                GetDialogsRequest()
            }
        }, 7000)
        return () => clearInterval(interval)
    }, [isFetching])

    useEffect( () => {
        if (!isFetching) {
            GetDialogsRequest()}
    }, [])

    return (<ElementNameHeader text={'my dialogs'}>
        <ListContainerSection>
            <DialogsList myId={myId} dialogs={dialogs}/>
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