import { combineReducers } from 'redux';
import { reducer as photosReducer } from './photos/reducers';

const reducer = combineReducers({
  photos: photosReducer,
});

export {reducer};
