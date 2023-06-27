import { takeEvery, fork, put, all, call } from "redux-saga/effects"
import URLname from "../../common/const"
import { SEND_INVOICE } from "./actionTypes"
import {
  sendInvoiceData,
  } from "../../helpers/fakebackend_helper"
import { sendInvoiceSuccessful, sendInvoiceFailed } from "./actions";

function* sendInvoice({ payload: { user }}) {
    try {

          const response = yield call(sendInvoiceData, URLname + "/api/test/send_invoice_data", user);
          yield put(sendInvoiceSuccessful(response))

    } catch (error) {
        yield put(sendInvoiceFailed(error))
    }
}

export function* watchSendInvoice() {
    yield takeEvery(SEND_INVOICE, sendInvoice)
  }
  
  function* sendInvoiceSaga() {
    yield all([fork(watchSendInvoice)])
  }
  
  export default sendInvoiceSaga