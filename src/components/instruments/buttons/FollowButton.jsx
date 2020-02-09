import s from './Buttons.module.css';
import React from "react";

const FollowButton = ({isDisabled, buttonClick, isFollow}) => {
    if (isFollow ) {
        return <button className={s.follow__button} onClick={buttonClick} disabled={isDisabled}>Stop following</button>;
    } else {
        return <button className={s.follow__button} onClick={buttonClick} disabled={isDisabled}>Follow user</button>;
    }
}
export default FollowButton;