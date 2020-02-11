import s from './Buttons.module.css';
import React from "react";

const FollowButton = ({isDisabled, buttonClick, isFollow, isStretched}) => {
    let buttonStyle = s.follow__button;
    if (isStretched) buttonStyle += " " + s.follow__button_stretched;
    if (isFollow ) {
        return <button className={buttonStyle} onClick={buttonClick} disabled={isDisabled}>Stop following</button>;
    } else {
        return <button className={buttonStyle} onClick={buttonClick} disabled={isDisabled}>Follow user</button>;
    }
}
export default FollowButton;