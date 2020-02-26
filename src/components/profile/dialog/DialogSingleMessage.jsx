import React from 'react';

import PropTypes from "prop-types";
import styled from "styled-components";

import {dateParse} from "../../../utils/date";
import { escapedNewLineToLineBreakTag} from "../../instruments/styles/Styles";

const DialogMessage = styled.li`
    display: flex;
    padding: 5px 0;
    width 100%;
    text-align: ${ p => p.myPost ? 'right' : 'left'};    
    
    justify-content: ${ p => p.myPost ? 'right' : 'left'};    
    -webkit-justify-content: ${ p => p.myPost ? 'flex-end' : 'flex-start'};  
    small {
        color: grey;
    }
    
`;

const MessageCut = styled.div`
        word-break: break-word;
        padding: 3px 7px;
        border-radius: 3px;
        background: white;   
        max-width:80%;               
    
`

const RoundUnread = styled.div`
background: #32608A;
margin-top: 5px;
margin-left-2px;
width: 6px;
height: 6px;
border-radius: 3px;
`


const DialogSingleMessage = ({isMyPost, isRead, text, date}) => {
    return (
        <DialogMessage myPost={isMyPost}>
            <MessageCut isRead={isRead}>
                {escapedNewLineToLineBreakTag(text)}
                <br/> <small>{dateParse.toTimeString(date)}</small>
            </MessageCut>
            {(isMyPost && (!isRead)) && <RoundUnread />}
        </DialogMessage>
    )
}

DialogSingleMessage.propTypes = {
    isMyPost: PropTypes.bool,
    isRead: PropTypes.bool,
    text: PropTypes.string,
    date: PropTypes.string
}



export default DialogSingleMessage