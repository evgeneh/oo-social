import React from 'react';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {logout} from "../../redux/reducers/auth-reducer";

import style from './Header.module.css';

import MainMenu from "./MainMenu";
import SearchBar from "../forms/searchbar-form/SearcBar";

const Header = ({isAuth, login, logout}) => {
    return (
        <div className={style.pageHeader}>
            <div className={style.pageHeader__border}>
                <h1 className={style.home}>
                    {isAuth && <NavLink className={style.home__logo} to='/'> {login} </NavLink>}
                </h1>
                <div className={style.searchBar}>
                    <SearchBar/>
                </div>
                <MainMenu isAuth={isAuth} logout={logout}/>
            </div>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}


export default connect (mapStateToProps, {logout}) (Header);