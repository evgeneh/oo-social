import React, {useState, useEffect} from 'react';
import s from  './Profile.module.css'

import ElementNameHeader from "./element-name-header/ElementNameHeader";
import UserStatus from "./user-status/UserStatus";
import UProfileInfo from "./profile-info/ProfileInfo";
import UProfileContacts from "./profile-info/ProfileContacts";

import userDefPic from '../../media/def_usrpic.jpg'
import Link from "../instruments/link/Link";
import UpdateProfileForm from "./UpdateProfileForm";
import {getFilledContactsCount} from "./ProfileAnalysis";

import FileUpload from "../forms/FileUpload";
import SomeFriendsBlock from "./some-friends/SomeFriendsBlock";
import RateProfile from "./rating-counter/RateProfile";

const LeftBlock = ({imageLarge, userName, isOwner, uploadPhoto, setEditMode, children, rating, friends}) => {
    let imageSrc = (imageLarge) ? imageLarge : userDefPic
    const handleFileUpload = (event) => {
        if (event.target.files.length)
            uploadPhoto(event.target.files[0])
    }


    return (
        <div className={s.leftBlock}>
            <img src={imageSrc} alt={userName + ' prfile photo'} width='200px'/>
            {isOwner && <>

                <FileUpload onUpload={handleFileUpload}>
                    <Link linkName={"Upload new user photo"}/>
                </FileUpload>

                <Link linkName='Edit profile' onClick={setEditMode}/>

                {children}

            </>}
            <RateProfile rateValue={rating} />
            <SomeFriendsBlock text={"friends"} count={friends.totalCount} users={friends.profiles}/>

        </div>)
}

//<div className={s.profilePage}>
const Profile = ({user, setStatus, statusText, isOwner, uploadPhoto, uploadProfile, isEdit, profileUpdateFetching, friends, rating}) => {

    let [isProfileEdit, setProfileEdit] = useState(false)

    useEffect( () => {

        setProfileEdit(isEdit)
    }, [isEdit])

    const handleSetMode = () => {
        setProfileEdit(true)
    }

    const profileChangeSubmit = (formProfile) => {
        console.log(formProfile)
        uploadProfile(formProfile)

          //setProfileEdit(false)
    }

    const profileCloseEdit = () => {
        setProfileEdit(false)
    }

    return (
        <ElementNameHeader text={user.fullName} >
            <div className={s.profilePage}>
                <LeftBlock imageLarge={user.photos.large} userName={user.fullName} isOwner={isOwner} uploadPhoto={uploadPhoto} setEditMode={handleSetMode} friends={friends} rating={rating} />
                <div className={s.profileData}>
                    {(isProfileEdit && isOwner) ?
                        <UpdateProfileForm onSubmit={profileChangeSubmit} user={user} initialValues={user} onCancel={profileCloseEdit} >
                            <UserStatus statusText={statusText} />
                            {profileUpdateFetching && <span>profile updating...</span>}
                        </UpdateProfileForm>
                        :
                    <>
                        <div className={s.userInfo__header}>
                            {user.fullName}
                            <UserStatus statusText={statusText} setStatus={setStatus} isOwner={isOwner} />
                        </div>

                        <UProfileInfo lookingForAJob={user.lookingForAJob} aboutMe={user.aboutMe}
                                  description={user.lookingForAJobDescription} />

                        <UProfileContacts text='contacts' contacts={user.contacts} count={getFilledContactsCount(user.contacts)}/>
                    </>
                    }

                </div>
            </div>
        </ElementNameHeader>
    )
}

export default Profile;