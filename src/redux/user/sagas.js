import { takeEvery, put, call } from 'redux-saga/effects';
import {
  SIGNIN,
  SIGNIN_SUCCESS,
  CHECK_TOKEN,
  CHECK_TOKEN_SUCCESS,
  LOGOUT,
  LOGOUT_SUCCESS,
} from './actions';
import {queryAPI} from '../query-api';

function* handler() {
  yield takeEvery(SIGNIN, singinUser)
  yield takeEvery(LOGOUT, logoutUser)
  yield takeEvery(CHECK_TOKEN, checkToken)
}

function* singinUser(action) {
  const { username, password } = action.payload
  console.log('[User Saga] singinUser params ', { username, password });
  try {
    const auth = yield call(queryAPI, {
      endpoint: 'login',
      method: 'POST',
      body: {
        username,
        password
      }
    });

    console.log('[Sagas] user: ', {response: auth.token});
    yield put({
      type: SIGNIN_SUCCESS,
      payload: {
        userToken: auth.token
      },
    })
  } catch (error) {
    console.log('[User Saga] singinUser error: ', error)
  }
}

function* checkToken(action) {
  try {
    yield put({
      type: CHECK_TOKEN_SUCCESS,
      payload: {},
    })
  } catch (error) {
    console.log('[User Saga] checkToken error: ', error)
  }
}

function* logoutUser(action) {
  try {
    yield put({
      type: LOGOUT_SUCCESS,
      payload: {
        userToken: null,
      },
    })
  } catch (error) {
    console.log('[User Saga] logoutUser error: ', error)
  }
}

export { handler }
