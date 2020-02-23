import React from "react";
import {connect} from "react-redux";

import {login} from "../../redux/reducers/auth-reducer";
import {getUsers} from "../../redux/reducers/users-reducer";

import ElementNameHeader from "../profile/element-name-header/ElementNameHeader";
import LoginForm from "../forms/LoginForm";
import Link from "../instruments/link/Link";

import s from "../forms/Forms.module.css";
import LoginWelcome, {LoginWelcomeText} from "./LoginWelcome";


const Login = (props) => {

    if (props.isAuth && props.previousLocation && (props.previousLocation !== "/login"))
        props.history.push(props.previousLocation)


    const formSubmit = (value) => {
        props.login(value.email, value.password, value.rememberMe)
    }
    return (
        <ElementNameHeader text='login'>
            <div className={s.formBlock}>
                {(props.isAuth) ?
                    <LoginWelcomeText>You have an account and you need to logout first</LoginWelcomeText> :
                    <>
                        {props.children}
                        <LoginForm onSubmit={formSubmit}/>
                        <LoginWelcomeText>If you haven't an account, please <Link to='/registration' linkName='register' /></LoginWelcomeText>
                    </>
                }
            </div>

        </ElementNameHeader>
    )
}


const LoginContainer = ({isFetching, totalCount, getUsers, ...props} ) => {

    React.useEffect( () => {
        let countUpd
        if (! props.isAuth)
            countUpd = setInterval( () => {
                if (! isFetching)
                    getUsers(1)
            }, 1000)
        else
            clearInterval(countUpd)
        return () => clearInterval(countUpd)
    }, [props.isAuth, getUsers])

    return <Login {...props}> <LoginWelcome count={totalCount + 1}/></Login>

}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        previousLocation: state.auth.previousLocation,

        totalCount: state.users.totalCount,
        isFetching: state.users.isFetching,
    }
}


export default connect (mapStateToProps, {login, getUsers}) (LoginContainer);