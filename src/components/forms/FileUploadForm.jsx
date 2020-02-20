import React from 'react';
import style from './Forms.module.css';
import {Field, reduxForm} from "redux-form";
import TextBox from "./inputs-validate/TextBox";

const FileUpload = (props) => {
    return (
        <>
            {props.error}
            <Field name="lookingForAJobDescription" component={TextBox} multiline={true}/>
        </>
    )
}

export default reduxForm({form: 'upload_image'})(FileUpload);
