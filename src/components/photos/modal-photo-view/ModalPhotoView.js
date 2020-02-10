import React, {useEffect} from 'react';

import style from './ModalPhoto.module.css';

import Link from "../../instruments/link/Link";

const ModalPhotoView = ({showSinglePhoto, children, indexImg, imgCount, path}) => {

    return (
    <div className={style.imageModal} onClick={showSinglePhoto.bind(null, null)} >



        <div className={style.imageModal__body} onClick={(e) => e.stopPropagation()}>
            <div className={style.imageModal_navigation}>
                <div className={style.imageModal_menu__left}>
                    <Link isDisabled={indexImg < 2} onClick={showSinglePhoto.bind(null, indexImg - 1)}
                          linkName={"<< Previous  "}/>
                </div>
                <div className={style.imageModal_menu__center}>
                    <Link  onClick={showSinglePhoto.bind(null, null)} linkName={"Close"}/>
                </div>
                <div className={style.imageModal_menu__right}>
                    <Link isDisabled={indexImg === imgCount} onClick={showSinglePhoto.bind(null, indexImg + 1)} linkName={"Next >>"}/>
                </div>
            </div>

            <div className={style.imageModal_imgContainer}>
                <div className={style.imageModal_imgContainer__cell}>
                    <img src={path}  />
                </div>
            </div>

            {children}

        </div>
    </div>
    )
}


export default ModalPhotoView;