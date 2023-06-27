import { takeEvery, fork, put, all, call } from "redux-saga/effects"
import URLname from "../../common/const"
import { SEND_CUSTOMERS } from "./actionTypes"
import {
    postSendCustomersData,
  } from "../../helpers/fakebackend_helper"
import { sendCustomersSuccessful, sendCustomersFailed } from "./actions";

function* sendCustomers({ payload: { user }}) {
    try {
      const response = [];
        for (let i = 0; i < Math.round(user.length / 100); i ++) {
          const res = yield call(postSendCustomersData, URLname + "/api/test/send_customers_data", user.slice(i * 100, (i + 1) * 100));
          response.push(res);
        }
        
        yield put(sendCustomersSuccessful(response))
        console.log("response", response);
    } catch (error) {
        yield put(sendCustomersFailed(error))
    }
}

export function* watchSendCustomers() {
    yield takeEvery(SEND_CUSTOMERS, sendCustomers)
  }
  
  function* sendCustomersSaga() {
    yield all([fork(watchSendCustomers)])
  }
  
  export default sendCustomersSaga