import {takeEvery, put, call} from 'redux-saga/effects';
import {GET_DATA_REQUEST, GET_DATA_REQUEST_SUCCESS} from './actions';
import {queryAPI} from '../query-api';
import data from '@utils/photos.json'

function* handler() {
  yield takeEvery(GET_DATA_REQUEST, getDataRequest);
}

function* getDataRequest(action) {
  try {
    // const photos = yield call(queryAPI, {
    //   endpoint: '',
    //   method: 'GET',
    // });

    // console.log('[Sagas] photos: ', {data: photos});
    yield put({
      type: GET_DATA_REQUEST_SUCCESS,
      payload: {
        data: data.data,
      },
    });
  } catch (error) {
    console.log('[Users Saga] getDataRequest error: ', error);
  }
}

export {handler};
