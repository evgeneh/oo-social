import {connect} from "react-redux";
import SideBar from "./SideBar";

let mapStateToProps = (state) => {
    return {
        alerts: state.requests.alerts,
        myId: state.auth.myId
    }
}

export default connect(mapStateToProps, {})(SideBar)