import React from "react";

import style from "./SomeFriendsBlock.module.css"
import userDefPic from "../../../media/def_usrpic_small.jpg"

import BadgeHeaderHOC from "../Widjet/BadgeHeader";

import {NavLink} from "react-router-dom";

import Link from "../../instruments/link/Link";



const  BadgeSubHeader = ({count, name}) => {
    const linkName = count + ((count === 1) ? " friend" : " friends");

    return (<div className={style.subBadge}>
        <Link to={'/friends'} linkName={linkName} />
        <div className={style.subBadge__all}> <Link to={'/friends'} linkName={'All'} /> </div>
    </div>
    )
}

const SomeFriends = ({users, count}) => {
    return (
        <>
            <BadgeSubHeader count={count} />
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