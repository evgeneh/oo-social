import React, {useEffect, useState} from 'react';

import style from './ModalPhoto.module.css';

import {dateParse} from '../../../utils/date'

import Link from "../../instruments/link/Link";


const ModalPhotoViewMenu = ({isOwner, image, setAsProfile, isDisabled, deletePhoto, setDescriptionReq}) => {
    //#region of change photo description methods
    let [isDescriptionEdit, setDescriptionEdit] = useState(false)
    let [imgDescription, setImgDescription] = useState( image.description)

    useEffect(() => {
        setImgDescription(image.description)
    }, [image.description])

    const handleEditImageDescription = (e) => {
        console.log(e.target.value)
        setImgDescription(e.target.value)
        console.log("setImgDescription:  " + imgDescription)
    }

    const sendDescription = () => {
        console.log("send " + imgDescription)
        setDescriptionReq(image.id, imgDescription )
        setDescriptionEdit(false)
    }
    //#endregion

    const date = dateParse.toNumbers(image.date)

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
                        <li><Link isDisabled={isDisabled} onClick={()=> {setDescriptionEdit(true)} } linkName={"Change image description"}/></li>
                        <li><Link isDisabled={isDisabled} onClick={setImageHandle} linkName={"Set as profile image"}/></li>
                        <li><Link isDisabled={isDisabled} onClick={deleteImageHandle} linkName={"Delete this image"}/></li>
                    </ul> :
                    <div></div>}

                <div className={style.imageModal_menu__left + " " + style.imageModal_menu__right}>

                        <li key={"Description edit"}>
                            {isDescriptionEdit ?
                                <input autoFocus placeholder="Add description" value={imgDescription}
                                       onChange={handleEditImageDescription}
                                       onBlur={sendDescription}/> :
                                <span>{image.description}</span>
                            }
                        </li>


                    <li key={"Photo date"}>Uploaded {date}</li>
                    <li key={"full version"}><Link isExternal={true} to={image.path} linkName="Watch full image version" /></li>

                </div>
            </div>

    )
}


export default ModalPhotoViewMenu;