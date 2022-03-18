import { takeLatest, all, call, put } from "redux-saga/effects";
import axios from "axios";

import userActionTypes from "./user.types";
import { getCurrentUser } from "../../utils/utils";

import { signInFailure, signInSuccess } from "./user.actions";

export function* signInWithUsername({ payload: { username, password } }) {
  try {
    const userData = yield axios
      .post(`http://localhost:9000/api/student/login/${username}/${password}`)
      .then((res) => res.data);
    yield put(signInSuccess(userData));
  } catch (e) {
    yield put(signInFailure(e));
  }
}

export function* checkUserSession(){
  try{
    const userData = yield getCurrentUser();
    yield put(signInSuccess(userData));
  }catch(e){
    yield put(signInFailure(e));
  }
}

export function* onSignInStart() {
  yield takeLatest(userActionTypes.SIGN_IN_START, signInWithUsername);
}

export function* onCheckUserSession() {
  yield takeLatest(userActionTypes.CHECK_USER_SESSION, checkUserSession);
}

export function* userSaga() {
  yield all([call(onSignInStart), call(onCheckUserSession)]);
}
