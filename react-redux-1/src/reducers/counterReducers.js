import { INCREMENT, DECREMENT } from "../actions/counterActions";

const initialState = {
  count: 0,
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      console.log("increment");
      break;
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    // break;
    default:
      return state;
  }
  // console.log(counter);
};

export default counter;
