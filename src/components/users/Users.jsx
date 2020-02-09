import React from 'react';
import s from  './Users.module.css'

import {NavLink, Redirect} from "react-router-dom";

import userDefPic from '../../media/def_usrpic.jpg'
import UsersPages from '../instruments/Pagination'
import FollowButton from "../instruments/buttons/FollowButton";
import ElementNameHeader from "../profile/element-name-header/ElementNameHeader";


const UserBlock = (props) => {

    const handleClickFollow =() => {
        //если я незарегистрированный пользователь то  обработчик ничего не делает
        //+ добавить всплывашку залогиниться
        if (! props.isAuth) return
        if (props.user.followed)
            props.endFollowing(props.user.id)
        else
            props.beginFollowing(props.user.id)
    }

    const isDisabled = props.isOwner || props.isToggling.some( (id) => {return (id === props.user.id) } )

    return (
        <div className={s.userFrame}>
            <div className={s.userFrame__picture}>
                {}
                <img src={props.user.photos.small || userDefPic}   alt={'id=' + props.user.id +' userpic'}/>
            </div>
            <div className={s.userFrame__about}>
                <NavLink to={'/id' + props.user.id}><h2>{props.user.name}</h2></NavLink>
                <div className={s.userFrame__status}>{props.user.status}</div>
                <FollowButton isFollow={props.user.followed} buttonClick={handleClickFollow} isDisabled={isDisabled}/>
            </div>
        </div>
    )
}

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize)
    if ((props.match.params.pageNo > pagesCount) || (props.match.params.pageNo < 1))
        return <Redirect to='/users/1'/>

    const usersList = props.users.map((userItem) => {
        return <UserBlock user={userItem} beginFollowing={props.beginFollowing} endFollowing={props.endFollowing} isOwner={userItem.id == props.myId} isAuth={!!props.myId}
                          isToggling={props.isToggling} key={userItem.id}/>
    })

    return (
        <ElementNameHeader text={`User count: ${props.totalCount}`}>
            <UsersPages pagesCount={pagesCount} page={(props.match.params.pageNo || 1)} pageName={props.pageName} >
                {usersList}
            </UsersPages>
        </ElementNameHeader>
    )
}

export default Users;