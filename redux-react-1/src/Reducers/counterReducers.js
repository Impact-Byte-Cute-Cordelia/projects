import { INCREMENT, DECREMENT } from "../Actions/counterActions";

const initialState = {
  cart: 0,
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        cart: state.cart + 1,
      };
    case DECREMENT:
      console.log("DECREMENT");
      break;
    default:
      return state;
  }
};

export default counter;
