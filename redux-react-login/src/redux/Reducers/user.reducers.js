import { SIGN_UP, SIGN_IN } from "../Actions/user.actions";

// check token
const token = localStorage.getItem("token");

const initialState = token
  ? {
      isLogged: true,
      data: [],
    }
  : {
      isLogged: false,
      data: [],
      signupData: [],
    };

// reducers users
const user = (state = initialState, action) => {
  console.log("test");
  switch (action.type) {
    case SIGN_IN:
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
};

export default user;
