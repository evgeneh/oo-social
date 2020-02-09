import s from './Buttons.module.css';
import React from "react";

const Button = (props) => {
        if (props.isNonButton)
                return <label className={s.follow__button}>
                        <span>{props.children}</span>
                </label>
        return <button className={s.follow__button} {...props}  onClick={props.onClick}> {props.children} </button>;

}
export default Button;