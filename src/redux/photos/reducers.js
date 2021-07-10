import { GET_DATA_REQUEST_SUCCESS } from './actions';

const initialState = {
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_REQUEST_SUCCESS:
      const { data } = action.payload;
      state.data = []
      if (data !== []) {
        state.data = data
      }
      return { data: state.data };
    default:
      return state;
  }
};

export {reducer};
