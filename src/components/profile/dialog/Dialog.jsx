import React, {useEffect, useRef} from 'react';


import PropTypes from "prop-types";
import styled from "styled-components";

import {dateCompare, dateParse} from "../../../utils/date";
import {DateText, escapedNewLineToLineBreakTag} from "../../instruments/styles/Styles";
import PostAddForm from "../../forms/PostAddForm";
import {reduxForm} from "redux-form";

const Parent = styled.div`
    height: 80vh;
    display: grid;    
    padding: 10px;
    grid-template-rows: 1fr auto 100px;
    section {
        background: #DAE1E8;   
    }
`

const DialogBox = styled.div`    
    overflow-y: auto;
`

const DialogsList = styled.ol`
    list-style: none;    
    margin: 0;
    width: 1fr;
    padding: 10px;
    background:  #DAE1E8;

`

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


const DialogData = styled.li`
    display: flex;
    padding-top: 5px;
    align-items: center;
    justify-content: center;
`;

const MessageCut = styled.div`
        word-break: break-word;
        padding: 3px 7px;
        border-radius: 3px;
        background: white;  
        max-width:80%;                 
    
`

const PostAddFormDialog = reduxForm({form: "dialogMessage"})(PostAddForm)

const Dialog = ({messages, owner, totalMessagesCount, myId, sendMessage}) => {
    let datePrev = new Date(0)

    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({behaviour: "smooth"})
    }

    useEffect( scrollToBottom, [messages])


    const handleSendMessage = (value) => {

        sendMessage(value.text, owner.userId)
    }

    let reverseMessages = [...messages].reverse()
    return (
        <Parent>
            <section className="void"></section>
            <DialogBox>
                <DialogsList>
                    {

                        reverseMessages.map((message) => {

                            const isMyPost = (message.ownerId === myId)

                            let date = new Date(message.date)
                            let isNewDay = ! dateCompare.isSameDay(datePrev,date)
                            datePrev = date
                            //
                            return <React.Fragment  key={message.date}>
                            { isNewDay &&
                                 <DialogData>
                                     <DateText> {dateParse.toDayAndMonth(date)} </DateText>
                                </DialogData>
                            }
                                <DialogMessage key={message.date} myPost={isMyPost}>
                                    <MessageCut>
                                       {escapedNewLineToLineBreakTag(message.text)}
                                        <br/> <small>{dateParse.toTimeString(message.date)}</small>
                                    </MessageCut>
                                </DialogMessage>
                             </React.Fragment>
                        })

                    }
                </DialogsList>
                <div ref={messagesEndRef} />
            </DialogBox>
            <PostAddFormDialog onSubmit={handleSendMessage} />
        </Parent>
    )
}

Dialog.propTypes = {
    messages: PropTypes.array,
    owner: PropTypes.object,

    totalMessagesCount: PropTypes.number,
    myId: PropTypes.number,

    sendMessage: PropTypes.func
}

export default Dialog