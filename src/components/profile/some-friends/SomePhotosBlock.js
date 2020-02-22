import React from "react";

import style from "./SomeFriendsBlock.module.css"
import userDefPic from "../../../media/def_usrpic_small.jpg"

import BadgeHeaderHOC from "../Widjet/BadgeHeader";
import BadgeSubHeader from "../Widjet/BadjeSubHeader";

import {NavLink} from "react-router-dom";


const SomeFriends = ({users, count, pageId}) => {
    return (
        <>
            <BadgeSubHeader count={count} name={(count === 1) ? "friend" : "friends"} link={"/friends" + pageId} />
        <div className={style.someUsers}>
            {
                users.map(user => {
                    return (<NavLink to={'/id' + user.id} className={style.profile__small}  key={user.id}>
                            <div className={style.profileImage} key={user.id}>
                                <img
                                    src={user.photos.small ? user.photos.small : userDefPic}
                                    alt={"id" + user.id + " small userpic"}/>
                            </div>
                            {user.name}
                        </NavLink>
                    )
                })}
        </div>
            </>
    )
}

export default BadgeHeaderHOC(SomeFriends);