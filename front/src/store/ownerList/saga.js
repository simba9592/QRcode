import { takeEvery, fork, put, all, call } from "redux-saga/effects"
import URLname from "../../common/const"
import { GET_ALL_OWNER, GET_ALL_USER } from "./actionTypes"
import {
    postFakeRegister,
    postJwtRegister,
    postOwenrList,
  } from "../../helpers/fakebackend_helper"
import { getAllOwnerFailed, getAllOwnerSuccessful } from "./actions";

function* getAllOwner({ payload: { user }}) {
    try {
        const response = yield call(postOwenrList, URLname + "/api/test/get-all-owner", user)
        yield put(getAllOwnerSuccessful(response, "owner"))
    } catch (error) {
        yield put(getAllOwnerFailed(error))
    }
}

export function* watchGetAllOwner() {
    yield takeEvery(GET_ALL_OWNER, getAllOwner)
  }
  
  function* OwnerListSaga() {
    yield all([fork(watchGetAllOwner)])
  }
  
  export default OwnerListSaga