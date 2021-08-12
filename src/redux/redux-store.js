import { applyMiddleware, combineReducers, createStore } from "redux";
import authReduser from "./auth-reducer";
import messageReduser from "./message-reduser";
import profileReduser from "./profile-reduser";
import sidebarReduser from "./sidebar-reduser";
import usersReduser from "./users-reducer";
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    profilePage: profileReduser,
    messagesPage: messageReduser,
    sidebar: sidebarReduser,
    usersPage: usersReduser,
    auth: authReduser,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store