import { takeEvery, fork, put, all, call } from "redux-saga/effects"
import URLname from "../../common/const"
import { GET_ALL_USER } from "./actionTypes"
import {
    postFakeRegister,
    postJwtRegister,
    postUserList,
  } from "../../helpers/fakebackend_helper"
import { getAllUserFailed, getAllUserSuccessful } from "./actions";

function* getAllUser({ payload: { user }}) {
    try {
        const response = yield call(postUserList, URLname + "/api/test/get-all-user", user)
        yield put(getAllUserSuccessful(response));
    } catch (error) {
        yield put(getAllUserFailed(error))
    }
}

export function* watchGetAllUser() {
    yield takeEvery(GET_ALL_USER, getAllUser)
  }
  
  function* userListSaga() {
    yield all([fork(watchGetAllUser)])
  }
  
  export default userListSaga