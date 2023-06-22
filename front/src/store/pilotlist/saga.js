import { takeEvery, fork, put, all, call } from "redux-saga/effects"
import URLname from "../../common/const"
import { GET_ALL_PILOT, GET_ALL_USER } from "./actionTypes"
import {
    postFakeRegister,
    postJwtRegister,
    postPilotList,
  } from "../../helpers/fakebackend_helper"
import { getAllPilotFailed, getAllPilotSuccessful } from "./actions";

function* getAllPilot({ payload: { user }}) {
    try {
        const response = yield call(postPilotList, URLname + "/api/test/get-all-pilot", user)
        yield put(getAllPilotSuccessful(response, "Pilot"))
    } catch (error) {
        yield put(getAllPilotFailed(error))
    }
}

export function* watchGetAllPilot() {
    yield takeEvery(GET_ALL_PILOT, getAllPilot)
  }
  
  function* PilotListSaga() {
    yield all([fork(watchGetAllPilot)])
  }
  
  export default PilotListSaga