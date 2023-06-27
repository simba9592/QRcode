import { combineReducers } from "redux";

// Front
import Layout from "./layouts/reducer";

// Authentication
import Login from "./auth/login/reducer";
import Account from "./auth/register/reducer";
import ForgetPassword from "./auth/forgetpwd/reducer";
import Profile from "./auth/profile/reducer";

//Calendar
import Calendar from "./calendar/reducer";
//Chat
import chat from "./chat/reducer";
//Ecommerce
import Ecommerce from "./ecommerce/reducer";

//Project
import Projects from "./projects/reducer";

// Tasks
import Tasks from "./tasks/reducer";
//Form advanced
import changeNumber from "./formAdvanced/reducer";

//Crypto
import Crypto from "./crypto/reducer";

//TicketsList
import Tickets from "./tickets/reducer";
//Crm
import Crm from "./crm/reducer";

//Invoice
import Invoice from "./invoice/reducer";

//Mailbox
import Mailbox from "./mailbox/reducer";
// User list
import getAllUserReducer from "./userList/reducer";

//Owner profile
import getOwnerProfile from "./ownerprofile/reducer";

//send report
import sendReportDetails from "./report/reducer";

//receive report
import receiveReportData from "./receivereport/reducer";

//owner list
import getAllOwnerReducer from "./ownerList/reducer";

//pilot profile
import  getPilotProflie  from "./pilotprofile/reducer";

//pilot list
import  getAllPilotReducer  from "./pilotlist/reducer";

//airplane profile
import getAirplaneProflieData from "./airplaneprofile/reducer";

//airplane list
import getAllAirplaneReducer from "./airplanelist/reducer";

//customers
import sendCustomersDetails from "./customers/reducer";

//payments
import sendPaymentsDetails from "./payments/reducer";

//buildings
import sendBuildingsDetails from "./buildings/reducer";

//get customers
import getCustomersDetails from "./getcustomers/reducer";

//get payment
import getPaymentsDetails from "./getpayment/reducer";

//get building
import getBuildingDetails from "./getbuildings/reducer";

//send invoice data
import sendInvoiceDetails from "./sendinvoice/reducer";

//get one invoice
import getOneInvoiceReducer from "./ownerprofile/reducer";

const rootReducer = combineReducers({
    // public
    Layout,
    Login,
    Account,
    ForgetPassword,
    Profile,
    Calendar,
    chat,
    Projects,
    Ecommerce,
    Tasks,
    changeNumber,
    Crypto,
    Tickets,
    Crm,
    Invoice,
    Mailbox,
    getAllUserReducer,
    getOwnerProfile,
    sendReportDetails,
    receiveReportData,
    getAllOwnerReducer,
    getPilotProflie,
    getAllPilotReducer,
    getAirplaneProflieData,
    getAllAirplaneReducer,
    sendCustomersDetails,
    sendPaymentsDetails,
    sendBuildingsDetails,
    getCustomersDetails,
    getPaymentsDetails,
    getBuildingDetails,
    sendInvoiceDetails,
    getOneInvoiceReducer,
});

export default rootReducer;