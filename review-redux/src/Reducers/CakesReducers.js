import { INCREMENT, DECREMENT } from "../Actions/CakesActions";

const initialState = {
  cakes: 0,
};

const cakes = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        cakes: state.cakes + 1,
      };
    case DECREMENT:
      return {
        ...state,
        cakes: state.cakes - 1,
      };
    default:
      return state;
  }
};

export default cakes;
