import React from 'react';
import {connect} from "react-redux";

import {updateAlerts} from "../../redux/reducers/requests-reducer";

import SideBar from "./SideBar";

const AlertsContainer = ({updateAlerts, isFetching, ...props}) => {

    React.useEffect( () => {
        if (!isFetching)
            updateAlerts()
    }, [isFetching])

    return <SideBar {...props} />
}


let mapStateToProps = (state) => {
    return {
        alerts: state.requests.alerts,
        myId: state.auth.myId,

        isFetching: state.dialog.isFetching,
    }
}

export default connect(mapStateToProps, {updateAlerts})(AlertsContainer)