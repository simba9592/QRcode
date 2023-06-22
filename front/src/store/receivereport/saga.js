import { takeEvery, fork, put, all, call } from "redux-saga/effects"
import URLname from "../../common/const"
import { RECEIVE_REPORT } from "./actionTypes"
import {
  getReceiveData
  } from "../../helpers/fakebackend_helper"
import { receiveReportSuccessful, receiveReportFailed } from "./actions";

function* receiveReport({ payload: { user }}) {
    try {
        const response = yield call(getReceiveData, URLname + "/api/test/receive_report_data", user)
        yield put(receiveReportSuccessful(response))
    } catch (error) {
        yield put(receiveReportFailed(error))
    }
}

export function* watchReceiveData() {
    yield takeEvery(RECEIVE_REPORT, receiveReport)
  }
  
  function* receiveDataSaga() {
    yield all([fork(watchReceiveData)])
  }
  
  export default receiveDataSaga