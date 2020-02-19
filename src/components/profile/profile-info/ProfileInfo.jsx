import React from "react";

import s from  './ProfileInfo.module.css'
import ProfileInfoElem from "./profile-info-element/ProfileInfoElem";

const UProfileInfo = ({aboutMe, lookingForAJob, description}) => {
    return (
        <div className={s.profileInfo}>
                <ProfileInfoElem label='About me:'>{aboutMe}</ProfileInfoElem>
                <ProfileInfoElem label='Looking for a job:'> {(lookingForAJob)?'Yes':'No'}</ProfileInfoElem>
                <ProfileInfoElem label='Professional skills:'>{description} </ProfileInfoElem>
        </div>
    )
}

export default UProfileInfo;

/*
{props.infoElems.map(
                (elem) => {
                    if (elem.data)
                    return <UserInfoElem userInfoItem={elem}/>
                }
            )}
 */