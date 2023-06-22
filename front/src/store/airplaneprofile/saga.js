import { takeEvery, fork, put, all, call } from "redux-saga/effects"
import URLname from "../../common/const"
import { AIRPLANE_PROFILE_SEND } from "./actionTypes"
import {
  postAirplaneProfile
  } from "../../helpers/fakebackend_helper"
import { getAirplaneProflieSuccessful, getAirplaneProflieFailed } from "./actions";

function* getAirplaneProflie({ payload: { user }}) {

    try {
        const formData = new FormData();
        formData.append('file', user.file);
        formData.append('AirplaneName', user.AirplaneName);
        formData.append('AirplaneMark', user.AirplaneMark);
        formData.append('Owner', user.Owner);
        formData.append('Pilot', user.Pilot);
        const response = yield call(postAirplaneProfile, URLname + "/api/test/airplane-profile", formData)
        yield put(getAirplaneProflieSuccessful(response));
        console.log(response, "airplane");
    } catch (error) {
        yield put(getAirplaneProflieFailed(error))
    }
}

export function* watchAirplaneProfile() {
    yield takeEvery(AIRPLANE_PROFILE_SEND, getAirplaneProflie)
  }
  
  function* AirplaneProfileSage() {
    yield all([fork(watchAirplaneProfile)])
  }
  
  export default AirplaneProfileSage