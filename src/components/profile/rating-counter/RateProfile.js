import React from "react";

import style from "./RateProfile.module.css"


const RateProfile = ({rateValue}) => {
    const blockWidth = 199;

    const perCentWidth = Math.trunc(blockWidth * rateValue / 100);

    return (
        <>
           <div className={style.percentValue}>{rateValue + "%"}</div>
           <div className={style.rateBlock}>
               <div style={{width: perCentWidth}} className={style.rateBlock__filled}></div>
               <div style={{width: blockWidth - perCentWidth}} className={style.rateBlock__empty}></div>
           </div>
        </>
    )
}

export default RateProfile;