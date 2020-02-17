import React from "react";

import {connect} from "react-redux";
import {register} from "../../redux/reducers/auth-reducer";
import {NavLink, Redirect} from "react-router-dom";

import ElementNameHeader from "../profile/element-name-header/ElementNameHeader";
import RegisterForm from "../forms/RegisterForm";

import s from "../forms/Forms.module.css";
import {LoginWelcomeText} from "./LoginWelcome";


const Register = (props) => {

    const formSubmit = (values) => {
        props.register(values.email, values.password, values.login, values.fullName)
    }

    if (props.isRegistered)

        return  <Redirect to={"/login"} />
    else
    return (
        <ElementNameHeader text='registration'>
            <div className={s.formBlock}>
            {(props.isAuth) ?
                 <LoginWelcomeText>You have an account and i want to logout first</LoginWelcomeText> :
                <>
                    <RegisterForm onSubmit={formSubmit} />
                    <LoginWelcomeText>I have an account and i want to <NavLink to='/login'>login</NavLink></LoginWelcomeText>
                </>
            }
            </div>
        </ElementNameHeader>
    )
}


let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        isRegistered: state.auth.isNewUserRegistered
    }
}


export default connect(mapStateToProps, {register}) (Register);