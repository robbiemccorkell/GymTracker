import {API_URL} from '../config.json';
import isEmpty from 'lodash/isEmpty';

export const GET_USERS = 'GET_USERS';
export const ERROR = 'ERROR';
export const LOGIN_USER = 'LOGIN_USER';

export function getUsers() {
  const query = { "query":
    `{
      users {
        username
        name
        email
        token
      }
    }`
  };

  return async (dispatch) => {
    try {
      const response = await fetch(`${API_URL}/data/`, {
        method: 'POST',
        body: JSON.stringify(query)
      })

      const json = await response.json();

      dispatch({
        type: GET_USERS,
        payload: json
      });
    } catch (exception) {
      dispatch({
        type: ERROR,
        payload: exception.message
      })
    }
  };
}

export function loginUser(username, password) {
  const query = { "query":
    `mutation loginUser {
      user: loginUser (
        username: "${username}",
        password: "${password}"
      )
      {
        id
        username
        name
        email
        token
      }
    }`
  };

  return async (dispatch) => {
    try {
      const response = await fetch(`${API_URL}/data/`, {
        method: 'POST',
        body: JSON.stringify(query)
      })

      const json = await response.json();

      if (!isEmpty(json.errors)) {
        throw json.errors[0];
      }

      dispatch({payload: json, type: LOGIN_USER})
    } catch (exception) {
      dispatch({
        type: ERROR,
        payload: exception.message
      })
    }
  }
}
