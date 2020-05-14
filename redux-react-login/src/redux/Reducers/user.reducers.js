import { LOG_IN, SIGN_UP } from "../Actions/user.actions";

const token = localStorage.getItem("token");

const initialState = token
  ? {
      isLogged: true,
      data: [],
      profile: {},
      comments: [],
    }
  : {
      isLogged: false,
      signupData: [],
      data: [],
      profile: {},
      comments: [],
    };

function userFunc(state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
      return {
        isLogged: true,
      };

    case SIGN_UP:
      return {
        signupData: action.payload,
      };
    default:
      return state;
  }
}

export default userFunc;
