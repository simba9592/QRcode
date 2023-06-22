import { takeEvery, fork, put, all, call } from "redux-saga/effects"
import URLname from "../../common/const"
import { PILOT_PROFILE_SEND } from "./actionTypes"
import {
  postPilotProfile
  } from "../../helpers/fakebackend_helper"
import { getPilotProflieSuccessful, getPilotProflieFailed } from "./actions";

function* getPilotProflie({ payload: { user }}) {
    try {
        const formData = new FormData();
        formData.append('file', user.file);
        formData.append('FullName', user.FullName);
        formData.append('Company', user.Company);
        formData.append('PhoneNumber', user.PhoneNumber);
        formData.append('EmailAddress', user.EmailAddress);
        const response = yield call(postPilotProfile, URLname + "/api/test/pilot-profile", formData)
        yield put(getPilotProflieSuccessful(response));
        console.log(response, "pilotlist");
    } catch (error) {
        yield put(getPilotProflieFailed(error))
    }
}

export function* watchPilotProfile() {
    yield takeEvery(PILOT_PROFILE_SEND, getPilotProflie)
  }
  
  function* PilotProfileSage() {
    yield all([fork(watchPilotProfile)])
  }
  
  export default PilotProfileSage