import React from 'react';
import s from  './Users.module.css'

import {NavLink, Redirect} from "react-router-dom";

import userDefPic from '../../media/def_usrpic.jpg'
import UsersPages from '../instruments/Pagination'
import FollowButton from "../instruments/buttons/FollowButton";
import ElementNameHeader from "../profile/element-name-header/ElementNameHeader";


const UserBlock = ({user, isAuth, isDisabled, endFollowing, beginFollowing}) => {

    const handleClickFollow =() => {
        //если я незарегистрированный пользователь то  обработчик ничего не делает
        //+ добавить всплывашку залогиниться
        if (! isAuth) return
        if (user.followed)
            endFollowing(user.id)
        else
            beginFollowing(user.id)
    }

    return (
        <div className={s.userFrame}>
            <div className={s.userFrame__picture}>
                {}
                <img src={user.photos.small || userDefPic}   alt={'id=' + user.id +' userpic'}/>
            </div>
            <div className={s.userFrame__about}>
                <NavLink to={'/id' + user.id}><h2>{user.name}</h2></NavLink>
                <div className={s.userFrame__status}>{user.status}</div>
                <FollowButton isFollow={user.followed} buttonClick={handleClickFollow} isDisabled={isDisabled}/>
            </div>
        </div>
    )
}

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize)
    if ((props.match.params.pageNo > pagesCount) || (props.match.params.pageNo < 1))
        return <Redirect to={`/${props.pageName}${props.userId || ""}/1`} />

    const usersList = props.users.map((userItem) => {

        const isDisabled =  (userItem.id == props.myId) || props.isToggling.some( (id) => {return (id === userItem.id) } )

        return <UserBlock user={userItem} isAuth={!!props.myId} key={userItem.id} isDisabled={isDisabled}
                          beginFollowing={props.beginFollowing} endFollowing={props.endFollowing} />
    })

    return (
        <ElementNameHeader text={`User count: ${props.totalCount}`}>
            <UsersPages pagesCount={pagesCount} page={(props.match.params.pageNo || 1)} pageName={props.pageName}  userId={props.userId}>
                {usersList}
            </UsersPages>
        </ElementNameHeader>
    )
}

export default Users;