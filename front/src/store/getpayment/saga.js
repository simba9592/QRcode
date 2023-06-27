import { takeEvery, fork, put, all, call } from "redux-saga/effects"
import URLname from "../../common/const"
import { GET_PAYMENTS } from "./actionTypes"
import {
  postGetPaymentsData,
  } from "../../helpers/fakebackend_helper"
import { getPaymentsSuccessful, getPaymentsFailed } from "./actions";

function* getPayments({ payload: { user }}) {
    try {
      
          const response = yield call(postGetPaymentsData, URLname + "/api/test/get_payments_data", user);
          yield put(getPaymentsSuccessful(response))
   
    } catch (error) {
        yield put(getPaymentsFailed(error))
    }
}

export function* watchGetPayments() {
    yield takeEvery(GET_PAYMENTS, getPayments)
  }
  
  function* getPaymentsSaga() {
    yield all([fork(watchGetPayments)])
  }
  
  export default getPaymentsSaga