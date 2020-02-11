import React from 'react';

import style from './Photos.module.css';

import FileUpload from "../forms/FileUpload";
import Button from "../instruments/buttons/Button";
import Link from "../instruments/link/Link";


const UploadPhotosPanel = ({fullName, userId, currentUploading, startUpload}) => {
    const [totalUpload, setTotalUpload] = React.useState(0)

    const handleFilesUpload = (event) => {
        if (event.target.files.length) {
            setTotalUpload(event.target.files.length)
            startUpload(event.target.files);
        }
    }

    return (
        <div className={style.imagesControl}>
            <div className={style.imagesControl__navigation}>
                <Link to={"/id" + userId} linkName={fullName}/><b>{" >> "}</b>photos
            </div>

            {currentUploading ? <h2>...uploading&nbsp;{currentUploading}&nbsp;of&nbsp;{totalUpload}</h2> :

                <div className={style.imagesControl__upload}>
                    <Button isNonButton={true}>
                        <FileUpload onUpload={handleFilesUpload} multiple={true}>Upload new photos</FileUpload>
                    </Button>
                </div>
            }
        </div>
    )
}


export default UploadPhotosPanel;