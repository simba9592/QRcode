import { all, fork } from "redux-saga/effects";

//layout
import LayoutSaga from "./layouts/saga";

//Auth
import AccountSaga from "./auth/register/saga";
import AuthSaga from "./auth/login/saga";
import ForgetSaga from "./auth/forgetpwd/saga";
import ProfileSaga from "./auth/profile/saga";

//calendar
import calendarSaga from "./calendar/saga";

//chat
import chatSaga from "./chat/saga";

//ecommerce
import ecommerceSaga from "./ecommerce/saga";

//Project
import projectSaga from "./projects/saga";

// Task
import taskSaga from "./tasks/saga";



//Counter
// import CounterSaga from './formAdvanced/saga';

// Crypto
import cryptoSaga from "./crypto/saga";
//TicketsList
import ticketsSaga from "./tickets/saga";

//crm
import crmSaga from "./crm/saga";

//invoice
import invoiceSaga from "./invoice/saga";

//mailbox
import mailboxSaga from "./mailbox/saga";

//userList
import userListSaga from "./userList/saga";

//owner profile
import ownerProfileSage from "./ownerprofile/saga";

//send report
import sendReportSaga from "./report/saga";

//receive report
import receiveDataSaga from "./receivereport/saga";

//owner list 
import OwnerListSaga from "./ownerList/saga";

//pilot profile
import PilotProfileSage from "./pilotprofile/saga";

//pilot list
import PilotListSaga from "./pilotlist/saga";

//airplane profile
import AirplaneProfileSage from "./airplaneprofile/saga";

//airplane list
import AirplaneListSaga from "./airplanelist/saga";


export default function* rootSaga() {
  yield all([
    //public
    fork(LayoutSaga),
    fork(AccountSaga),
    fork(AuthSaga),
    fork(ForgetSaga),
    fork(ProfileSaga),
    fork(chatSaga),
    fork(projectSaga),
    fork(taskSaga),
    fork(cryptoSaga),
    fork(ticketsSaga),
    fork(calendarSaga),
    fork(ecommerceSaga),
    fork(crmSaga),
    fork(invoiceSaga),
    fork(mailboxSaga),
    fork(userListSaga),
    fork(ownerProfileSage),
    fork(sendReportSaga),
    fork(receiveDataSaga),
    fork(OwnerListSaga),
    fork(PilotProfileSage),
    fork(PilotListSaga),
    fork(AirplaneProfileSage),
    fork(AirplaneListSaga),
  ]);
}
