import { combineReducers } from 'redux';

// Front
import Layout from './layout/reducer';

// Authentication Module
import Account from './auth/register/reducer';
import Login from './auth/login/reducer';
import Forget from './auth/forgetpwd/reducer';

//Calendar 
import Calendar from "./calendar/reducer";

//chat
import chat from "./chat/reducer"

//ecommerce
import Ecommerce from "./e-commerce/reducer";
import RightSideModal from "./rightSideModal/reducer"
import APICall from "./apiCall/reducer";
import Diagram from "../pages/diagram/reducer";


const rootReducer = combineReducers({

    // public
    Layout,

    // Authentication
    Account,
    Login,
    Forget,
    Calendar,
    Ecommerce,
    chat,
    RightSideModal,
    APICall,
    Diagram

});

export default rootReducer;