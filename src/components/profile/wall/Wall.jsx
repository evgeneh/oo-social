import React, {useState, useEffect} from 'react';

import PropTypes from 'prop-types';

import Link from "../../instruments/link/Link";

import BadgeHeaderHOC from "../Widjet/BadgeHeader";
import BadgeSubHeader from "../Widjet/BadjeSubHeader";


const Wall = ({posts, count, isAuth, pageId}) => {

    let [isOpenTextBox, setTextBoxStatus] = useState(false)

    const handleShowTextBox = () =>  setTextBoxStatus(true)



    return (
        <>
            <BadgeSubHeader count={count} name={(count === 1) ? "post" : "posts"} link={"/wall" + pageId} >
                <Link onClick={handleShowTextBox} linkName={"Write New Post"} />
            </BadgeSubHeader>
            {isOpenTextBox &&
                <>
                    {" i can edit"}
                    </>
            }
        </>
    )
}

Wall.propTypes = {
    posts: PropTypes.array,
    count: PropTypes.number,
    isAuth: PropTypes.bool,
    pageId: PropTypes.number
}

export  default BadgeHeaderHOC(Wall)