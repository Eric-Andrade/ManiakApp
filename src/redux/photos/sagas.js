import {takeEvery, put, call} from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GET_DATA_REQUEST, GET_DATA_REQUEST_SUCCESS} from './actions';
import {queryAPI} from '../query-api';
// import data from '@utils/photos.json'

function* handler() {
  yield takeEvery(GET_DATA_REQUEST, getDataRequest);
}

function* getDataRequest(action) {
  try {
    // let _token = await AsyncStorage.getItem('@storage_token')
    const photos = yield call(queryAPI, {
      endpoint: 'images',
      method: 'GET',
    });


    // console.log('[Sagas] photos: ', {data: photos});
    yield put({
      type: GET_DATA_REQUEST_SUCCESS,
      payload: {
        // data: data.data,
        data: photos
      },
    });
  } catch (error) {
    console.log('[Users Saga] getDataRequest error: ', error);
  }
}

export {handler};
