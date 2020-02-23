import React, {useState, useEffect} from 'react';
import s from  './Profile.module.css'

import ElementNameHeader from "./element-name-header/ElementNameHeader";
import ProfileLeftBlock from "./ProfileLeftBlock";

import UserStatus from "./user-status/UserStatus";
import UProfileInfo from "./profile-info/ProfileInfo";
import UProfileContacts from "./profile-info/ProfileContacts";

import UpdateProfileForm from "./UpdateProfileForm";

import {getFilledContactsCount} from "./ProfileAnalysis";


const Profile = ({user, setStatusRequest, statusText, isOwner, uploadProfile, isEdit, profileUpdateFetching, ...props}) => {

    let [isProfileEdit, setProfileEdit] = useState(false)

    useEffect( () => {
        setProfileEdit(isEdit)
    }, [isEdit])

    const handleSetMode = () => {
        setProfileEdit(true)
    }

    const profileChangeSubmit = (formProfile) => {
        uploadProfile(formProfile)
    }

    const profileCloseEdit = () => {
        setProfileEdit(false)
    }

    return (
        <ElementNameHeader text={user.fullName} >
            <div className={s.profilePage}>
                <ProfileLeftBlock user={user} isOwner={isOwner} setEditMode={handleSetMode}  {...props} />
                <div className={s.profileData}>
                    {(isProfileEdit && isOwner) ?
                        <UpdateProfileForm onSubmit={profileChangeSubmit} user={user} initialValues={user} onCancel={profileCloseEdit} >
                            <UserStatus statusText={statusText} />
                            {profileUpdateFetching && <h2>profile updating...</h2>}
                        </UpdateProfileForm>
                        :
                    <>
                        <div className={s.userInfo__header}>
                            {user.fullName}
                            <UserStatus statusText={statusText} setStatus={setStatusRequest} isOwner={isOwner} />
                        </div>

                        <UProfileInfo lookingForAJob={user.lookingForAJob} aboutMe={user.aboutMe}
                                  description={user.lookingForAJobDescription} />

                        <UProfileContacts text='Contacts' contacts={user.contacts} count={getFilledContactsCount(user.contacts)}/>

                        {props.children}
                    </>
                    }

                </div>
            </div>
        </ElementNameHeader>
    )
}

export default Profile;