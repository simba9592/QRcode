import { takeEvery, fork, put, all, call } from "redux-saga/effects"
import URLname from "../../common/const"
import { GET_BUILDING } from "./actionTypes"
import {
  postGetBuildingData,
  } from "../../helpers/fakebackend_helper"
import { getBuildingSuccessful, getBuildingFailed } from "./actions";

function* getBuilding({ payload: { user }}) {
    try {
      
          const response = yield call(postGetBuildingData, URLname + "/api/test/get_building_data", user);
          yield put(getBuildingSuccessful(response))
   
    } catch (error) {
        yield put(getBuildingFailed(error))
    }
}

export function* watchGetBuilding() {
    yield takeEvery(GET_BUILDING, getBuilding)
  }
  
  function* getBuildingSaga() {
    yield all([fork(watchGetBuilding)])
  }
  
  export default getBuildingSaga