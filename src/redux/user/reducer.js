import UserActionTypes from "./action-types";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserActionTypes.LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    case UserActionTypes.LOGOUT:
      return {
        ...state,
        user: null,
      };
    case "USER_SUCCESS":
      return {
        ...state,
        user: null,
      };
    case "USER_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
