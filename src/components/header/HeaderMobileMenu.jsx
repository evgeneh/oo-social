import React, {useState} from 'react';

import style from './Header.module.css';

import menuImage from "../../media/menu.JPG"

import styled from 'styled-components'
import AlertsContainer from "../sidebar/AlertsContainer";

const MenuHiddenBody = styled.div`
    position: fixed;
    top: 45px;
    background: transparent;
    width: 100%;
    height: 100%;
    z-index: 10;
`

const MenuHiddenBlock = styled.div`
     position: fixed;
     background: white;
     display: block;
     padding: 5px;
     top: 46px;
     left: 5px;
     width: 118px;
     box-shadow: 5px 5px 5px -2px rgba(0, 0, 0, .2);
`

const MenuHidden = () => {
    let [isMenuShow, setMenuShow] = useState(false)

    const handleHideMenuClick = () => {
        setMenuShow(false)
    }

    const handleToggleMenuClick = () => {
        setMenuShow(!isMenuShow)
    }

    return (
        <>
            <div className={style.menuHidden}>
                <img src={menuImage} width={"21px"} onMouseUp={handleToggleMenuClick} />
            </div>
            {isMenuShow &&
            <MenuHiddenBody onClick={handleHideMenuClick} >
                <MenuHiddenBlock >
                    <AlertsContainer/>
                </MenuHiddenBlock>
            </MenuHiddenBody>}
        </>
    )
}

export default MenuHidden