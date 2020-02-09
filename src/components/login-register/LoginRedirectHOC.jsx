import React from "react";
import {connect} from "react-redux";

import {Redirect} from "react-router-dom";


const mapStateToProps = (state) => {
    return {isAuth: state.auth.isAuth}
}

const withLoginRedirect = (Component) => {
    class withLogin extends React.Component {
        render() {
            if (this.props.isAuth) return <Component {...this.props}/>
            else return <Redirect to={'login'} />
        }
    }
    return connect(mapStateToProps, {})(withLogin)
}

export default withLoginRedirect

