import { combineReducers } from 'redux';
import { GET_USERS } from '../actions';

const INITIAL_STATE = { all: [] }

const users = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USERS:
      return {...state, all: action.payload.data.users};
    default:
      return state;
  }
}

export default combineReducers({
  users
})
