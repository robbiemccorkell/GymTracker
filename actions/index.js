import {API_URL} from '../config.json';

export const GET_USERS = 'GET_USERS';
export const ERROR = 'ERROR';

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
