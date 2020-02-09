import React from "react";
import {NavLink} from "react-router-dom";

import s from './Link.module.css'

//
const Link = ({to, linkName, isExternal, onClick, isDisabled}) => {
    //для ссылок на сторонние Url
    if (isDisabled)
        return <span className={s.navLink + " " + s.navLink__disabled} >{linkName}</span>
    if (!to)
        return  <span className={s.navLink} onClick={onClick}>{linkName}</span>
    if (isExternal){
        let extAddress = to;
        if (to.indexOf('https://') < 0 && to.indexOf('localhost:') < 0)
            extAddress = 'https://' + to
        return <a target='_blank' className={s.navLink} href={extAddress}  onClick={onClick}>{linkName}</a>
    }
    return (<NavLink className={s.navLink} to={to} onClick={onClick}>{linkName}</NavLink>)
}

export default Link;