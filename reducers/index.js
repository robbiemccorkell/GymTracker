import { combineReducers } from 'redux';
import { GET_USERS, LOGIN_USER, ERROR } from '../actions';

const INITIAL_STATE = { all: [], currentUser: {} }

const users = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USERS:
      return {...state, all: action.payload.data.users};
    case LOGIN_USER:
      console.log(action);
      return { ...state, currentUser: action.payload.data.user };
    default:
      return state;
  }
}

const ui = (state = {}, action) => {
  switch (action.type) {
    case ERROR:
      return {...state, errorMessage: action.payload}
      break;
    default:
      return state;
  }
};

export default combineReducers({
  users,
  ui
})
