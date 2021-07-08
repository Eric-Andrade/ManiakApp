import {
  SIGNIN_SUCCESS,
  CHECK_TOKEN_SUCCESS,
  LOGOUT_SUCCESS,
} from './actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  username: null,
  password: null,
  userToken: undefined,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN_SUCCESS:
      if (action.payload.userToken) {
        state.userToken = action.payload.userToken
        AsyncStorage.setItem('@storage_token', action.payload.userToken)
      }
      return { 
        userToken: state.userToken
      }
    case CHECK_TOKEN_SUCCESS:
      return { 
        userToken: state.userToken
      }
    case LOGOUT_SUCCESS:
      AsyncStorage.removeItem('@storage_token')
      return {
        userToken: null,
      }

    default:
      return state
  }
}

export { reducer }
