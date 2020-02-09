import React from "react";

import s from  './ProfileInfo.module.css'

import {Field} from "redux-form";

import ProfileInfoElem from "./profile-info-element/ProfileInfoElem";
import BadgeHeaderHOC from "../Widjet/BadgeHeader";
import TextBox from "../../forms/inputs-validate/TextBox";


/*contacts: {github: 'git.com' , website: "www.website.com", twi: null}*/
const UProfileContacts = ({contacts, isEdit}) => {
    if (!contacts) return <div></div>
    if (isEdit)
    return (

    <div className={s.profileInfo}>
        {
            Object.keys(contacts).map(key => {
                    return <ProfileInfoElem label={key}  key={key}><Field name={'contacts.' + key} component={TextBox}/></ProfileInfoElem>
            })}
    </div>

    )
    else
        return (
            <div className={s.profileInfo}>
                {
                    Object.keys(contacts).map(key => {
                        if (contacts[key])
                            return <ProfileInfoElem link={contacts[key]} label={key} key={key}> {contacts[key]} </ProfileInfoElem>
                    })}
            </div>
        )
}

export default BadgeHeaderHOC(UProfileContacts);