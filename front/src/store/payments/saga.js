import { takeEvery, fork, put, all, call } from "redux-saga/effects"
import URLname from "../../common/const"
import { SEND_PAYMENTS } from "./actionTypes"
import {
  postSendPaymentsData,
  } from "../../helpers/fakebackend_helper"
import { sendPaymentsSuccessful, sendPaymentsFailed } from "./actions";

function* sendPayments({ payload: { user }}) {
    try {
        for (let i = 0; i < Math.round(user.length / 100); i ++) {
          const response = yield call(postSendPaymentsData, URLname + "/api/test/send_payments_data", user.slice(i * 100, (i + 1) * 100));
          // yield put(sendPaymentsSuccessful(response))
        }
        
        // 
    } catch (error) {
        yield put(sendPaymentsFailed(error))
    }
}

export function* watchSendPayments() {
    yield takeEvery(SEND_PAYMENTS, sendPayments)
  }
  
  function* sendPaymentsSaga() {
    yield all([fork(watchSendPayments)])
  }
  
  export default sendPaymentsSaga