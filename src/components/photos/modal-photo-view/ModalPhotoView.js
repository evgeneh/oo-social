import React, {useEffect} from 'react';

import style from './ModalPhoto.module.css';

import Link from "../../instruments/link/Link";

const ModalPhotoView = ({showSinglePhoto, isOwner, indexImg, imgCount, image}) => {

    const date = (new Date(image.date)).toLocaleDateString("en-Us")


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
                    <img src={image.path}  />
                </div>
            </div>
            <div className={style.imageModal_menu}>

                {isOwner ?
                    <ul className={style.imageModal_menu__left}>
                        <li><Link linkName={"Set as profile image"}/></li>
                        <li><Link linkName={"Delete this image"}/></li>
                    </ul> :
                    <div></div>}

                <div className={style.imageModal_menu__left + " " + style.imageModal_menu__right}>
                    <li>Uploaded {date}</li>
                    <li><Link isExternal={true} to={image.path} linkName="Watch full image version" /></li>

                </div>
            </div>
        </div>
    </div>
    )
}


export default ModalPhotoView;