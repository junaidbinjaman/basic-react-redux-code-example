import {
  FETCH__USERS_REQUEST,
  FETCH__USERS_FAILURE,
  FETCH__USERS_SUCCESS,
} from "./userType";

const initialState = {
  loading: false,
  user: [],
  error: ''
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH__USERS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH__USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        error: ''
      }
    case FETCH__USERS_FAILURE:
      return {
        ...state,
        users: [],
        error: action.payload
      }

    default:
      return state
  }
}


export default userReducer