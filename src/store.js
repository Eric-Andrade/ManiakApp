import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import {reducer} from '@redux/root-reducer';

import {handler as userSaga} from '@redux/user/sagas';
import {handler as photosSaga} from '@redux/photos/sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(userSaga);
sagaMiddleware.run(photosSaga);

export {store};
