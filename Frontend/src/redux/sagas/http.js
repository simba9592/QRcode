import { call, fork, put, spawn, take } from "redux-saga/effects";
import { userActions } from "../user";
import { postActions } from "../post";
import { request } from "../../utils/http";

function* sendRequest(data) {
  try {
    const res = yield call(request, data);
    yield put(data.sucess(res.data));
  } catch (error) {
    yield put(data.error(error.response.data.message));
  }
}

//= ====================================
//  WATCHERS
// -------------------------------------

function* watchSendRequest() {
  while (true) {
    const { payload } = yield take(userActions.REQUEST);
    yield fork(sendRequest, { ...payload });
  }
}

function* watchSendRequestInTalkToSpark() {
  while (true) {
    const { payload } = yield take(postActions.REQUEST);
    yield fork(sendRequest, { ...payload });
  }
}

//= ====================================
//  INIT SAGAS
// -------------------------------------

export const http = [spawn(watchSendRequest), spawn(watchSendRequestInTalkToSpark)];
