import React from 'react';

import style from './Photos.module.css';

import ElementNameHeader from "../profile/element-name-header/ElementNameHeader";
import UploadPhotosPanel from "./UploadPhotosPanel";
import ModalPhotoView from "./modal-photo-view/ModalPhotoView";
import ModalPhotoViewMenu from "./modal-photo-view/ModalPhotoViewMenu";


const Photos = (props) => {

    const [indexImgModal, setImgModal] = React.useState(false)

    const showSinglePhoto = (index) => {
        if (index > props.photos.length)
            setImgModal(1)
        else setImgModal(index)
    }

    const getPhoto = () =>
    {
        let index  = indexImgModal
        if (index < 1)
            index = 1;
        if (index > props.photos.length)
            index = props.photos.length
        return props.photos[index - 1]
    }

    console.log(props.isOwner)
    return (
        <ElementNameHeader text={`id${props.userId} photos, total: ${props.totalCount}`}>

            {props.isOwner &&
                <UploadPhotosPanel userId={props.userId} fullName={props.fullName} currentUploading={props.currentUploading} startUpload={props.uploadPhotosRequest}/>
            }
            <div className={style.imagesPanel}>
                {
                    props.photos.map((photo, index) => {
                        return <div className={style.image__preview} key={photo.id} onClick={showSinglePhoto.bind(null, index + 1)}>

                            <img src={photo.preview} alt={`id ${props.userId} photo ${(index + 1)}`}/>
                        </div>
                    })
                }
            </div>
            {indexImgModal && (!!props.photos.length) &&
            <ModalPhotoView imgCount={props.photos.length}  path={getPhoto().path}
                            showSinglePhoto={showSinglePhoto} indexImg={indexImgModal} >

                <ModalPhotoViewMenu image={getPhoto()} isOwner={props.isOwner} deletePhoto={props.deletePhoto}
                                    setAsProfile={props.setImageAsProfilePhoto} isDisabled={props.isProfilePhotoSet} />

            </ModalPhotoView>
            }
        </ElementNameHeader>
    )
}
export default Photos