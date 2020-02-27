import React, {useEffect, useRef} from 'react';

import PropTypes from "prop-types";
import styled from "styled-components";

import {reduxForm} from "redux-form";

import {dateCompare, dateParse} from "../../../utils/date";
import {DateText} from "../../instruments/styles/Styles";
import PostAddForm from "../../forms/PostAddForm";

import DialogSingleMessage from "./DialogSingleMessage";

const Parent = styled.div`
    height: 80vh;
    display: grid;    
    padding: 10px;
    grid-template-rows: 1fr auto 100px;
    section {
        background: #DAE1E8;   
    }
    @media (max-width: 375px) {
      grid-template-rows: 1fr auto 70px;
      z-index: 5;  
      position: absolute;
      top: 70px;
      left: 0;
      right: 0;
      height: calc(95% - 70px);
    }
`

const DialogBox = styled.div`    
    overflow-y: auto;
`

const DialogsList = styled.ol`
    list-style: none;    
    margin: 0;
    width: 1fr;
    padding: 10px 20px;
    background:  #DAE1E8;
    
`;


const DialogData = styled.li`
    display: flex;
    padding-top: 5px;
    align-items: center;
    justify-content: center;
`;

const MessageCreation = styled.div`
     background: white;`
/*
     @media (max-width: 375px) {
     padding: 5px;

      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      margin: 0 auto;
     }
`
*/

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

                                <DialogSingleMessage date={date} isMyPost={isMyPost}
                                                     isRead={message.isRead} text={message.text}/>

                             </React.Fragment>
                        })

                    }
                </DialogsList>
                <div ref={messagesEndRef} />
            </DialogBox>
            <MessageCreation>
                <PostAddFormDialog onSubmit={handleSendMessage} />
            </MessageCreation>
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