import React from "react";

import s from  './ElementNameHeader.module.css'

const ElementNameHeader = (props) => {
    return (<div className={s.profileBorder}>
        <div className={s.profileHeader}>{props.text}</div>
        <div className={s.profileBorder__subBorder}>
            {props.children}
        </div>
    </div>)
}

export default ElementNameHeader;