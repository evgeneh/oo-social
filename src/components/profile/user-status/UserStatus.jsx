import React, {useState, useEffect} from "react";

import s from  './UserStatus.module.css'

const UserStatus = ({statusText, setStatus, isOwner}) => {
    let [isStatusEdit, setStatusEditMode] = useState(false)
    let [statusTextLocal, setStatusText] = useState(statusText)

    useEffect(() => {
        setStatusText(statusText)
    }, [statusText]);

    let handleAllowEdit = () => {
        setStatusEditMode(true);
    }
    let handleEndEdit = (event) => {
        setStatusEditMode(false);
        //server post request here
        setStatus(statusTextLocal)
    }

    let handleEditStatus = (event) => {
        setStatusText(event.target.value)
    }

    return (<div className={s.userStatus}>
        {isStatusEdit ? <input autoFocus placeholder="Change status" value={statusTextLocal} onChange={handleEditStatus}
                               onBlur={handleEndEdit}/> :
            <>
                { isOwner ?
                    <a onDoubleClick={handleAllowEdit}>{(!statusText || statusText.length < 1) ? 'Create your status!' : statusText}</a> :
                    <a> {statusText}</a>
                }
                <div className={s.userStatus__lastUpdate}>
                    updated 5 years ago
                </div>
            </>
        }
    </div>);

}

export default UserStatus;