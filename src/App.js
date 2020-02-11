import React, {useEffect} from 'react';
import './App.css';
import {Route, withRouter} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";

import {initApp} from "./redux/reducers/init-reducer";

import Header from "./components/header/Header";
import Preloader from "./components/instruments/Preloader";

import AlertsContainer from "./components/sidebar/AlertsContainer";
import Notes from "./components/notes/Notes";
import Login from "./components/login-register/Login";
import LoginRedirectTo from "./components/login-register/LoginRedirectTo";
import PhotosContainer from "./components/photos/PhotosContainer";

const ProfileContainer = React.lazy(() => import( "./components/profile/ProfileContainer"));
const Register = React.lazy(() => import( "./components/login-register/Register"));
const UsersContainer = React.lazy(() => import("./components/users/UsersContainer"));
const FriendsContainer = React.lazy(() => import("./components/users/FriendsContainer"));

const App = ({isInitialized, initApp, isAuth, myId}) => {

    useEffect(() => initApp(), [isInitialized])
    if (!isInitialized) return <Preloader/>
    return (
        <div className='main'>
            <header className='pageHeader'>
                <Header/>
            </header>
            <div className='sideBar'>
                <AlertsContainer/>
            </div>
            <div className='pageBody'>

                <Route exact path='/' render={() =>
                    <LoginRedirectTo conditionU={isAuth} path={"/id" + myId} orPath={"/login"}/>
                }/>
                <Route exact path='/id:userId?' component={() => <React.Suspense fallback={<Preloader/>}>
                    <ProfileContainer/>
                </React.Suspense>}/>

                <Route exact path='/edit' component={() => <>
                    <LoginRedirectTo conditionU={isAuth}/>
                    <React.Suspense fallback={<Preloader/>}>
                        < ProfileContainer isEdit={true}/>
                    </React.Suspense>
                </>}
                />

                <Route path='/friends:userId?/:pageNo?' render={(props) => (
                        <React.Suspense fallback={<Preloader/>}>
                            <FriendsContainer/>
                        </React.Suspense>
                    )}/>
                <Route path='/users/:pageNo?' render={(props) => (
                    <React.Suspense fallback={<Preloader/>}>
                        <UsersContainer/>
                    </React.Suspense>
                )}/>

                <Route path='/photos:userId?' component={PhotosContainer}/>

                <Route path='/notes' component={Notes}/>

                <Route path='/login' component={Login}/>
                <Route path='/registration' render={ ()=> (
                    <React.Suspense fallback={<Preloader/>}>
                        <Register/>
                    </React.Suspense>
                )}
                        />


            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
           isInitialized: state.app.initialize,
           isAuth: state.auth.isAuth,
           myId: state.auth.myId
    }
}

export default compose( withRouter, connect(mapStateToProps, {initApp}) ) (App)
