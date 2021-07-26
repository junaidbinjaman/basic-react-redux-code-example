import axios from "axios";
import {
  FETCH__USERS_REQUEST,
  FETCH__USERS_FAILURE,
  FETCH__USERS_SUCCESS,
} from "./userType";

export const fetchUserRequest = () => {
  return {
    type: FETCH__USERS_REQUEST,
  };
};

export const fetchUserSuccess = (users) => {
  return {
    type: FETCH__USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUserFailure = (error) => {
  return {
    type: FETCH__USERS_FAILURE,
    payload: error,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest)
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        const users = res.data
        dispatch(fetchUserSuccess(users))
      })
      .catch(error => {
        const errorMsg = error.message
        dispatch(fetchUserFailure(errorMsg))
      })
  }
}