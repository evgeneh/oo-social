import React from 'react';
import {Field, reduxForm} from 'redux-form'
import {minLength, required, validate} from "./forms-validators";

import s from  './Forms.module.css'
import TextBox from "./inputs-validate/TextBox";
import Button from "../instruments/buttons/Button";


const minLength4 = minLength(4);

const RegisterForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}  className={s.formBlock__inputs} >
            {props.error && <div className={s.formError}> {props.error} </div>}
            <div className={s.loginInput}>

                <Field name= "login" placeholder="Place your login" label={"Login:"} component={TextBox} validate={[required]}  />
            </div>
            <div className={s.loginInput}>
                <Field name= "email" placeholder="E-mail" label={"Email:"} component={TextBox} validate={[required]}  />
            </div>
            <div className={s.loginInput}>
                <Field name="password" placeholder="Your password" label={"Password:"} component={TextBox}  type="password"
                       validate={[required, minLength4]} />
            </div>
            <div className={s.loginInput}>
                <Field name="password2" placeholder="Confirm your password" component={TextBox}  type="password"
                       validate={[required, minLength4]} />
            </div>
            <div className={s.loginInput}>
                <Field name="fullName" placeholder="Enter your name" label={"Your name:"} component={TextBox} validate={[required]}  />
            </div>
            <div>
            <div className={s.loginButton}>
                <Button>Register</Button>
            </div>
            </div>


        </form>
    )}
//даём уникальное имя форме логинизации и оборачиваем ХОКом
export default reduxForm({form: 'register', validate,
})(RegisterForm)