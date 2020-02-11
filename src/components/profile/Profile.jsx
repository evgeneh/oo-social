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
import FollowButton from "../instruments/buttons/FollowButton";

const LeftBlock = ({user, isOwner, uploadPhoto, setEditMode, rating, friends, beginFollowing}) => {
    let imageSrc = (user.photos.large) ? user.photos.large : userDefPic
    const handleFileUpload = (event) => {
        if (event.target.files.length)
            uploadPhoto(event.target.files[0])
    }


    return (
        <div className={s.leftBlock}>
            <img src={imageSrc} alt={user.fullName + ' prfile photo'} width='210px'/>
            <ul className={s.leftBlock__profileMenu}>
                {isOwner ?
                <>
                    <li>
                        <FileUpload onUpload={handleFileUpload}>
                            <Link linkName={"Upload new user photo"}/>
                        </FileUpload>
                    </li>
                    <li>
                        <Link linkName='Edit my profile' onClick={setEditMode}/>
                    </li>

                </>
                  :<>
                        <li>
                            <Link linkName={"Send message to " + user.fullName} to={"/dialog" + user.userId}/>
                        </li>
                        <li>
                            <FollowButton isFollow={user.isFollow} isStretched={true} buttonClick={() => { alert(user.userId); beginFollowing(user.userId) }}  />
                        </li>
                   </>
                }
            </ul>
            <RateProfile rateValue={rating}/>
            <SomeFriendsBlock text={"friends"} count={friends.totalCount} users={friends.profiles} pageId={user.userId} />

        </div>)
}

//<div className={s.profilePage}>
const Profile = ({user, setStatus, statusText, isOwner, uploadPhoto, uploadProfile, isEdit, profileUpdateFetching, friends, rating, beginFollowing}) => {

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
                <LeftBlock user={user} isOwner={isOwner} beginFollowing={beginFollowing}
                           uploadPhoto={uploadPhoto} setEditMode={handleSetMode} friends={friends} rating={rating} />
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