import { takeEvery, fork, put, all, call } from "redux-saga/effects"
import URLname from "../../common/const"
import { GET_ONE_INVOICE } from "./actionTypes"
import {
    postFakeRegister,
    postJwtRegister,
    postGetOneInvoice,
  } from "../../helpers/fakebackend_helper"
import { getOneInvoiceSuccessful, getOneInvoiceFailed } from "./actions";

function* getOneInvoice({ payload: { user }}) {
    try {
        const response = yield call(postGetOneInvoice, URLname + "/api/test/init_invoice_data", user)
        yield put(getOneInvoiceSuccessful(response));
    } catch (error) {
        yield put(getOneInvoiceFailed(error))
    }
}

export function* watchgetOneInvoice() {
    yield takeEvery(GET_ONE_INVOICE, getOneInvoice)
  }
  
  function* getOneInvoiceSaga() {
    yield all([fork(watchgetOneInvoice)])
  }
  
  export default getOneInvoiceSaga