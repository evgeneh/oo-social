import React from 'react';
import style from './Forms.module.css';
import {reduxForm} from "redux-form";

const FileUpload = (props) => {
    console.log(props.error);
    return (
        <>
            {props.error}
            <label htmlFor={"file"} className={style.fileUpload}>
                <input type="file" name="file" id="file" onChange={props.onUpload} multiple={!! props.multiple}/>
                 {props.children}
            </label>
        </>
    )
}

export default reduxForm({form: 'upload_image'})(FileUpload);
