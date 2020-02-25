import  React from 'react'
import {Field, reduxForm} from "redux-form";

import TextBox from "./inputs-validate/TextBox";
import Button from "../instruments/buttons/Button";

import styled from 'styled-components'

const MessageContainer = styled.form`
    padding: 5px;    
    textarea {
        width: 99%;
        resize: vertical;
    }
`

const PostSubmit = styled.div`
    display: grid;
    justify-content: right;
    padding-top : 3px;
`

const PostAddForm = (props) => {
    return (

        <MessageContainer onSubmit={props.handleSubmit}>

            <Field name="text" component={TextBox} multiline={true}/>
            <PostSubmit>
                <Button> Add post </Button>
            </PostSubmit>
        </MessageContainer>

    )
}

export default PostAddForm