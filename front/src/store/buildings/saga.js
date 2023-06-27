import { takeEvery, fork, put, all, call } from "redux-saga/effects"
import URLname from "../../common/const"
import { SEND_BUILDING } from "./actionTypes"
import {
    postSendBuildingsData,
  } from "../../helpers/fakebackend_helper"
import { sendBuildingsSuccessful, sendBuildingsFailed } from "./actions";

function* sendBuildings({ payload: { user }}) {
    try {
        for (let i = 0; i < Math.round(user.length / 100); i ++) {
          const response = yield call(postSendBuildingsData, URLname + "/api/test/send_buildings_data", user.slice(i * 100, (i + 1) * 100))
        }
        
        // yield put(sendBuildingsSuccessful(response))
    } catch (error) {
        yield put(sendBuildingsFailed(error))
    }
}

export function* watchSendBuildings() {
    yield takeEvery(SEND_BUILDING, sendBuildings)
  }
  
  function* sendBuildingsSaga() {
    yield all([fork(watchSendBuildings)])
  }
  
  export default sendBuildingsSaga