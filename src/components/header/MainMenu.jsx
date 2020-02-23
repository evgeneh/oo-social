import React from 'react';
import menu from './Header.module.css'
import {NavLink} from "react-router-dom";


const MainMenu = (props) => {
    let menuItems = [
                     {name: 'events', path: '/events'}, {name: 'communities', path: '/communities'}, {name: 'users', path: '/users'} ];
    let handleLogout = () => {
        props.logout()
    }
    //для авторизованного пользователя выводим logout для неавторизованного login
    return (
        <ul className={menu.menuBar} >
            {props.isAuth ? <li className={menu.menuBar__item} key='logout' ><span onClick={handleLogout}>logout</span></li> :
                <li className={menu.menuBar__item} key='login'><NavLink to='/login'>login</NavLink> </li>}
            { menuItems.map( (item) => {
                return( <li className={menu.menuBar__item} key={item.name}><NavLink to={item.path}>{item.name}</NavLink></li> )
            }) }
        </ul>
    )
}

export default MainMenu;