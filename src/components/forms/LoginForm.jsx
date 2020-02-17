import React from 'react';

import s from  './Forms.module.css'

import {Field, reduxForm} from 'redux-form'
import {minLength, required} from "./forms-validators";

import TextBox from "./inputs-validate/TextBox";
import Button from "../instruments/buttons/Button";
import CheckBox from "./inputs-validate/CheckBox";


const minLength4 = minLength(4);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.formBlock__inputs}>
            {props.error && <div className={s.formError}> {props.error} </div>}
            <div className={s.loginInput}>
                <Field name="email" placeholder="Email" label="Email:" component={TextBox} validate={[required]}/>
            </div>
            <div className={s.loginInput}>
                <Field name="password" placeholder="Your password" label="Password:" component={TextBox} type="password"
                       validate={[required, minLength4]}/>
            </div>
            <div>
                <Field name="rememberMe" component={CheckBox} label='Remember me' reverse={true}/>
                <div className={s.loginButton + " " + s.loginButton_left}>
                <a href={"/registration"}><Button type="button" disabled={props.submit}>Register</Button></a>
                </div>
                <div className={s.loginButton}>
                    <Button type="submit" disabled={props.submit}>Login</Button>
                </div>
            </div>
        </form>
    )
}
//даём уникальное имя форме логинизации и оборачиваем ХОКом
export default reduxForm({form: 'login'})(LoginForm)
