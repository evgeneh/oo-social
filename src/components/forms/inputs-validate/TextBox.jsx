import React from 'react';

import s from  '../Forms.module.css'

//отделить св-во инпута для передачи дальше в redux-form
const TextBox = ({meta, input, label, multiline, ...props}) => {
    let isError = meta.touched && meta.error
    return (
        <div>
            {label && <div className={s.formLabel}>{label}</div> }

            {!!multiline ? <textarea {...input} {...props} /> :
                <input {...input} {...props}  /> }
            {isError && <div className={s.formError}>{meta.error}</div> }
        </div>
    )}
export default TextBox