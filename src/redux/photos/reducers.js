import { GET_DATA_REQUEST_SUCCESS } from './actions';

const initialState = {
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_REQUEST_SUCCESS:
      const { data } = action.payload;
      // console.log('[Reducer] data: ', data);
      return { data };

    default:
      return state;
  }
};

export {reducer};
