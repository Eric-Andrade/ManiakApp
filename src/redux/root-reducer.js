import { combineReducers } from 'redux';
import { reducer as userReducer } from './user/reducers';
import { reducer as photosReducer } from './photos/reducers';

const reducer = combineReducers({
  user: userReducer,
  photos: photosReducer,
});

export {reducer};
