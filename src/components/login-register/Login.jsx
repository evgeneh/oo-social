import React from "react";
import {connect} from "react-redux";

import {login} from "../../redux/reducers/auth-reducer";

import ElementNameHeader from "../profile/element-name-header/ElementNameHeader";
import LoginForm from "../forms/LoginForm";
import Link from "../instruments/link/Link";

import s from "../forms/Forms.module.css";

const Login = (props) => {
    const formSubmit = (value) => {
        props.login(value.email, value.password, value.rememberMe)
    }
    return (
        <ElementNameHeader text='login'>
            <div className={s.formBlock}>
                {(props.isAuth) ?
                    <span>I have an account and i want to logout first</span> :
                    <>
                        <LoginForm onSubmit={formSubmit}/>
                        <span>If you haven't an account, please <Link to="/registration" linkName='register' /></span>
                    </>
                }
            </div>

        </ElementNameHeader>
    )
}


let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}


export default connect (mapStateToProps, {login}) (Login);