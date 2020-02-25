import React from 'react';
import s from  './Profile.module.css'

import userDefPic from '../../media/def_usrpic.jpg'
import Link from "../instruments/link/Link";
import FollowButton from "../instruments/buttons/FollowButton";

import FileUpload from "../forms/FileUpload";
import SomeFriendsBlock from "./some-of-profile/SomeFriendsBlock";
import SomePhotosBlock from "./some-of-profile/SomePhotosBlock";
import RateProfile from "./rating-counter/RateProfile";


const ProfileLeftBlock = ({user, isOwner, uploadPhoto, setEditMode, rating, friends, beginFollowing, ...props}) => {

    let imageSrc = (user.photos.large) ? user.photos.large : userDefPic

    const handleFileUpload = (event) => {
        if (event.target.files.length)
            uploadPhoto(event.target.files[0])
    }

    let {singleProfileFollow, singleProfileUnfollow, profileFollowingFetch} = props;

    const handleFollowUser = () => {
        if (user.isFollow)
            singleProfileUnfollow(user.userId)
        else
            singleProfileFollow(user.userId)
    }


    return (
        <div className={s.leftBlock}>
            <img src={imageSrc} alt={user.fullName + ' profile photo'} width='210px'/>
            <ul className={s.leftBlock__profileMenu}>
                {isOwner ?
                <>
                    <li key={"fileUpload"}>
                        <FileUpload onUpload={handleFileUpload}>
                            <Link linkName={"Upload new user photo"}/>
                        </FileUpload>
                    </li>
                    <li key={"editProfile"}>
                        <Link linkName='Edit my profile' onClick={setEditMode}/>
                    </li>

                </>
                  :<>
                        <li key={"writeTo"}>
                            <Link linkName={"Send message to " + user.fullName} to={"/dialog" + user.userId}/>
                        </li>
                        <li key={"followUser"}>
                            <FollowButton isFollow={user.isFollow} isStretched={true} buttonClick={handleFollowUser} isDisabled={profileFollowingFetch} />
                        </li>
                   </>
                }
            </ul>
            <RateProfile rateValue={rating}/>
            <SomeFriendsBlock text={"Friends"} count={friends.totalCount} users={friends.profiles} pageId={user.userId} />
            <SomePhotosBlock  text={"Photos"} count={props.photosTotalCount} photos={props.photos} pageId={user.userId} />

        </div>)
}

export default ProfileLeftBlock;