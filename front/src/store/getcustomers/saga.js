import { takeEvery, fork, put, all, call } from "redux-saga/effects"
import URLname from "../../common/const"
import { SEND_GETCUSTOMER } from "./actionTypes"
import {
    postGetCustomersData,
  } from "../../helpers/fakebackend_helper"
import { sendGetCustomerSuccessful, sendGetCustomerFailed } from "./actions";

function* sendGetCustomers({ payload: { user }}) {
    try {
          const response = yield call(postGetCustomersData, URLname + "/api/test/get_customers_data", user);

        yield put(sendGetCustomerSuccessful(response))
    } catch (error) {
        yield put(sendGetCustomerFailed(error))
    }
}

export function* watchGetCustomers() {
    yield takeEvery(SEND_GETCUSTOMER, sendGetCustomers)
  }
  
  function* getCustomersSaga() {
    yield all([fork(watchGetCustomers)])
  }
  
  export default getCustomersSaga