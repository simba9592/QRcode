import { takeEvery, fork, put, all, call } from "redux-saga/effects"
import URLname from "../../common/const"
import { GET_ALL_AIRPLANE, GET_ALL_USER } from "./actionTypes"
import {
    postFakeRegister,
    postJwtRegister,
    postAirplaneList,
  } from "../../helpers/fakebackend_helper"
import { getAllAirplaneFailed, getAllAirplaneSuccessful } from "./actions";

function* getAllAirplane({ payload: { user }}) {
    try {
        const response = yield call(postAirplaneList, URLname + "/api/test/get-all-airplane", user)
        yield put(getAllAirplaneSuccessful(response, "Airplane"))
    } catch (error) {
        yield put(getAllAirplaneFailed(error))
    }
}

export function* watchGetAllAirplane() {
    yield takeEvery(GET_ALL_AIRPLANE, getAllAirplane)
  }
  
  function* AirplaneListSaga() {
    yield all([fork(watchGetAllAirplane)])
  }
  
  export default AirplaneListSaga