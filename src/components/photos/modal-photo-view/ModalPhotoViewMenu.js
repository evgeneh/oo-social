import React, {useEffect} from 'react';

import style from './ModalPhoto.module.css';

import Link from "../../instruments/link/Link";

const ModalPhotoViewMenu = ({isOwner, image, setAsProfile, isDisabled, deletePhoto}) => {

    const date = (new Date(image.date)).toLocaleDateString("en-Us")

    const setImageHandle = () => {
        setAsProfile(image.id)
    }

    const deleteImageHandle = () => {
        deletePhoto(image.id)
    }

    return (
            <div className={style.imageModal_menu}>

                {isOwner ?
                    <ul className={style.imageModal_menu__left}>
                        <li><Link isDisabled={isDisabled} onClick={setImageHandle} linkName={"Set as profile image"}/></li>
                        <li><Link isDisabled={isDisabled} onClick={deleteImageHandle} linkName={"Delete this image"}/></li>
                    </ul> :
                    <div></div>}

                <div className={style.imageModal_menu__left + " " + style.imageModal_menu__right}>
                    <li>Uploaded {date}</li>
                    <li><Link isExternal={true} to={image.path} linkName="Watch full image version" /></li>

                </div>
            </div>

    )
}


export default ModalPhotoViewMenu;