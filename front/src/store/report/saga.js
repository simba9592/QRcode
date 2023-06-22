import { takeEvery, fork, put, all, call } from "redux-saga/effects"
import URLname from "../../common/const"
import { SEND_REPORT } from "./actionTypes"
import {
    postSendReportData,
  } from "../../helpers/fakebackend_helper"
import { sendReportSuccessful, sendReportFailed } from "./actions";

function* sendReport({ payload: { user }}) {
    try {
        const response = yield call(postSendReportData, URLname + "/api/test/send_report_data", user)
        yield put(sendReportSuccessful(response))
    } catch (error) {
        yield put(sendReportFailed(error))
    }
}

export function* watchSendReport() {
    yield takeEvery(SEND_REPORT, sendReport)
  }
  
  function* sendReportSaga() {
    yield all([fork(watchSendReport)])
  }
  
  export default sendReportSaga