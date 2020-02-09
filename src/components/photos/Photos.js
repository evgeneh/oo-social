import React from 'react';

import style from './Photos.module.css';

import ElementNameHeader from "../profile/element-name-header/ElementNameHeader";
import UploadPhotosPanel from "./UploadPhotosPanel";
import ModalPhotoView from "./modal-photo-view/ModalPhotoView";

const Photos = (props) => {

    const [indexImgModal, setImgModal] = React.useState(false)

    const showSinglePhoto = (index) => {

        setImgModal(index)
    }

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
            {indexImgModal &&
            <ModalPhotoView image={props.photos[indexImgModal - 1]} isOwner={props.isOwner}
                            imgCount={props.photos.length} indexImg={indexImgModal}
                            showSinglePhoto={showSinglePhoto} />
            }
        </ElementNameHeader>
    )
}
export default Photos