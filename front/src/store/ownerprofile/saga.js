import { takeEvery, fork, put, all, call } from "redux-saga/effects"
import URLname from "../../common/const"
import { OWNER_PROFILE_SEND } from "./actionTypes"
import {
  postOwnerProfile
  } from "../../helpers/fakebackend_helper"
import { getOwnerProflieSuccessful, getOwnerProflieFailed } from "./actions";

function* getOwnerProflie({ payload: { user }}) {
    try {
        const formData = new FormData();
        formData.append('file', user.file);
        formData.append('FirstName', user.FirstName);
        formData.append('LastName', user.LastName);
        formData.append('PhoneNumber', user.PhoneNumber);
        formData.append('EmailAddress', user.EmailAddress);
        formData.append('Location', user.Location);
        formData.append('Amount', user.Amount);
        const response = yield call(postOwnerProfile, URLname + "/api/test/owner-profile", formData)
        yield put(getOwnerProflieSuccessful(response));
    } catch (error) {
        yield put(getOwnerProflieFailed(error))
    }
}

export function* watchOwnerProfile() {
    yield takeEvery(OWNER_PROFILE_SEND, getOwnerProflie)
  }
  
  function* ownerProfileSage() {
    yield all([fork(watchOwnerProfile)])
  }
  
  export default ownerProfileSage