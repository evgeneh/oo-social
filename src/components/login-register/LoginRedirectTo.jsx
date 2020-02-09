import React from "react";
import {Redirect} from "react-router-dom";

const LoginRedirectTo = ({conditionU, path, orPath}) => {

    return  (
        <>
            { conditionU ?
                <>
                    { path &&  <Redirect to={path} /> }
                </>
                : <Redirect to={orPath || '/login'} /> }
        </>
    )
}




export default  LoginRedirectTo;