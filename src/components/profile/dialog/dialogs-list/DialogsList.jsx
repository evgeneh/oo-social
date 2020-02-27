import React from 'react';

import {NavLink} from "react-router-dom";
import Link from "../../../instruments/link/Link";
import { withRouter} from "react-router-dom";

import { SinglePostBody} from "../../../instruments/styles/Styles";
import {LoginWelcomeText} from "../../../login-register/LoginWelcome";

import {Title} from "../../wall/SinglePost"

import styled from 'styled-components'

import {dateParse} from "../../../../utils/date";

const DialogBox = styled.div`
    border-bottom: solid 1px #DAE1E8;
    small {
        color: gray;
    }
`

const LastMessageBox = styled.div`
    margin: 5px;
    padding: 5px;    
    display: flex;
    justify-content: ${ p => p.myPost ? 'right' : 'left'};    
    -webkit-justify-content: ${ p => p.myPost ? 'flex-end' : 'flex-start'};  
    
    &:hover {
        background: #eee;
        cursor: pointer;
    }
    
    div {
        word-break: break-word;
        padding: 5px;
        border-radius: 3px;
        background: ${ p => p.read ? '#eee' : '#DAE2EA'};    
        max-width:80%;  
        overflow: hidden; 
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }    
    
`



const DialogsList = ({dialogs, history, myId}) => {

    if (dialogs === undefined || !dialogs || dialogs.length < 1)
        return (
            <LoginWelcomeText>
                You have not dialogs yet, send message to your <NavLink to={'/friends'}>friend</NavLink>
            </LoginWelcomeText>
        )

    return (
        <>
            {
                dialogs.map((dialog) => {

                    const toUserPage = () => history.push('/dialog' + dialog.user.userId)

                    return <SinglePostBody imgWidth={100} key={dialog.user.userId}>
                        <div onClick={toUserPage}>
                            <img src={dialog.user.photo} width={100} alt={dialog.user.userId + " userpic"}/>
                        </div>
                        <DialogBox>
                            <Title>
                                <span>Dialog with&nbsp;</span>
                                { (dialog.user.userId === myId) ?  <span>yourself</span> :
                                    <b><Link to={'/id' + dialog.user.userId} linkName={dialog.user.fullName}/></b>
                                }
                                <br/>
                                <small>Last message at {dateParse.toStrings(dialog.date)}</small>
                            </Title>

                                <LastMessageBox onClick={toUserPage}
                                                myPost={dialog.lastMessage.ownerId === myId} read={ dialog.lastMessage.isRead}>
                                    <div>{dialog.lastMessage.text} </div>
                                </LastMessageBox>

                        </DialogBox>
                    </SinglePostBody>
                })
            }
        </>
    )
}

export default withRouter(DialogsList)
