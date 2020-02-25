import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";

import {reducer as formReducer} from "redux-form"

import {profileReducer} from "./reducers/profile-reducer";
import {requestsReducer} from "./reducers/requests-reducer";
import {imagesReducer} from "./reducers/images-reducer";
import {usersReducer} from "./reducers/users-reducer";
import {initReducer} from "./reducers/init-reducer";
import {authReducer} from "./reducers/auth-reducer";
import {wallReducer} from "./reducers/wall-reducer";
import {dialogsReducer} from "./reducers/dialogs-reducer";



const rootReducer = combineReducers({
    app: initReducer, profile: profileReducer, auth: authReducer, form: formReducer,
    requests: requestsReducer, users: usersReducer, photos: imagesReducer,
    wall: wallReducer, dialog: dialogsReducer
})

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store