import React from "react";
import s from '../ProfileInfo.module.css'
import Link from "../../../instruments/link/Link";

//если есть ссылка отрисовывать с линком, доработать функционал для дат
const UserInfoElem = ({link, children, label}) => {

    let data = (!link) ? <>{children}</> : <Link to={link} linkName={children} isExternal={true}/>

    return (
        <>
            <div className={s.profileInfo__label}>{label}</div>
            <div className={s.profileInfo__data}>
                {data}
            </div>
        </>
    )
}

export  default UserInfoElem;