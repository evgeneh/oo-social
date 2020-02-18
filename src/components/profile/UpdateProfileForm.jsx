import React from 'react';

import s from '../forms/Forms.module.css'
import profileStyle from  './Profile.module.css'
import infoStyle from './profile-info/ProfileInfo.module.css'

import {Field, reduxForm} from 'redux-form'
import {minLength, required} from "../forms/forms-validators";

import {getFilledContactsCount} from "./ProfileAnalysis";

import TextBox from "../forms/inputs-validate/TextBox";
import Button from "../instruments/buttons/Button";
import ProfileInfoElem from "./profile-info/profile-info-element/ProfileInfoElem";
import UProfileContacts from "./profile-info/ProfileContacts";
import Link from "../instruments/link/Link";


const minLength4 = minLength(4);

//children - блок со статусом
const UpdateProfileForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit} >
            <div className={profileStyle.userInfo__header}>
                <div className={profileStyle.userInfo__header_edited}>
                    <span>Your full name:</span>
                    <div className={s.loginInput + ' ' + s.loginInput__profile}>
                        <Field name="fullName" component={TextBox} validate={[required]}/>
                    </div>
                </div>

                {props.children}

            </div>
            <div>
                <div className={infoStyle.profileInfo}>
                    <ProfileInfoElem label='About me:'><Field name="aboutMe" component={TextBox}/></ProfileInfoElem>
                    <ProfileInfoElem label='Looking for a job:'><Field name="lookingForAJob" component="input"
                                                                       type="checkbox"/></ProfileInfoElem>
                    <ProfileInfoElem label='Professional skills'><Field name="lookingForAJobDescription"
                                                                        component={TextBox}
                                                                        multiline={true}/></ProfileInfoElem>
                </div>

                <UProfileContacts contacts={props.user.contacts} isEdit={true} text='contacts'
                                  count={getFilledContactsCount(props.user.contacts)}/>


                    <div className={s.formBlock__events_cancel}>
                        <Link linkName='Cancel' onClick={props.onCancel}/>
                    </div>
                    <div className={s.loginButton + " " + s.loginButton__unshifted}>
                        <Button>Save changes</Button>
                    </div>

                {props.error && <div className={s.formError}> {props.error} </div>}


            </div>
        </form>
    )
}
//даём уникальное имя форме логинизации и оборачиваем ХОКом
export default reduxForm({form: 'updateProfile', enableReinitialize: true})(UpdateProfileForm)
