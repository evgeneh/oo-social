import React from 'react';
import {NavLink} from "react-router-dom";

import s from  './SideBar.module.css'

const SideBarItemWithAlert = (props) => {
    let ret = (props.item.count > 0) ?
        <span style={{flexDirection: 'row'}}> (
            <span style={{fontWeight: 'bold'}}>{props.item.count}</span>)</span> : '';

    return <li className={s.sideBar__navLi}><NavLink
        to={"/" + props.item.name.toLowerCase()}> {'My ' + props.item.name}{ret}</NavLink>
    </li>
}

const SideBar = (props) => {
    let ownerId = props.myId ? "/id" + props.myId : "";
    return (
        <ol className={s.sideBar__nav }>
            <li className={s.sideBar__profileLi}>
                <NavLink to={ownerId} className={s.sideBar__nav__profile}> My Profile </NavLink>
                <NavLink to='/edit' className={s.sideBar__nav__profile_edit}> ed. </NavLink>
            </li>

            { props.alerts.map( (item) => { return <SideBarItemWithAlert item={item}  key={item.name}/> } ) }
            <li className={s.sideBar__navLi}><NavLink to='/settings'>My Settings</NavLink>
            </li>
        </ol>
    )
}

export default SideBar;