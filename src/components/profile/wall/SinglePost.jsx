import React from 'react';

import Link from "../../instruments/link/Link";

import s from  '../user-status/UserStatus.module.css'
import styled from 'styled-components'

import {dateParse} from "../../../utils/date";

const WallPost = styled.div`
    display: grid;
    grid-template-columns: 50px 1fr;
    grid-gap: 5px;
    padding: 10px 5px;
`;

const Title = styled.div`
    background: #eee;
    padding: 5px;
    border-top: 1px solid  #45688E;
    border-bottom: 1px solid #ccc;
`;

const Text = styled.p`
    white-space: pre;
    line-height: 1.3;
    padding: 5px;
    margin: 0 2px;
`;

const PostFooter = styled.div`
    padding: 2px 5px;
    border-bottom: solid 1px #DAE1E8;
    font-size: 88%
`;

const SinglePost = ({post}) => {

    const date = dateParse.toStrings(post.date)
    return (
        <WallPost>
            <div>
                <img src={post.owner.photo} alt={post.owner.fullName + " photo"} width={50}/>
            </div>
            <div>
                <Title>
                    <b><Link to={"/id" + post.owner.userId} linkName={post.owner.fullName}/></b>&nbsp;posts at <br/>
                    <div className={s.userStatus__lastUpdate}>
                        {date}
                    </div>
                </Title>
                <Text>
                    {post.text}
                </Text>
                <PostFooter>
                    <Link to={"/wall?id=" + post.owner.userId} linkName={"Write on this user's wall"} />
                    &nbsp; &ndash; &nbsp;
                    <Link to={"/dialog?id=" + post.owner.userId} linkName={"Send private message"} />
                </PostFooter>
            </div>

        </WallPost>
    )
}

export  default SinglePost