import React from "react";
import {connect} from "react-redux";

import {Redirect, withRouter} from "react-router-dom";
import {setLocation} from "../../redux/reducers/auth-reducer";



const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        previousLocation: state.auth.previousLocation
    }
}

const withLoginRedirect = (Component) => {

    class withLogin extends React.Component {
        render() {
            if (! this.props.previousLocation || this.props.previousLocation !== this.props.location.pathname) {
                this.props.setLocation(this.props.location.pathname)
            }

            if (this.props.isAuth)
                return <Component {...this.props}/>
            else
                return <Redirect to={'login'} />
        }
    }
    return withRouter(connect(mapStateToProps, {setLocation})(withLogin))
}

export default (withLoginRedirect)

