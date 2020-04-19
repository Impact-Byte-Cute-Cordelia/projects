import { INCREMENT_CAKE, DECREMENT_CAKE } from "../Actions/CakesActions";

const initialState = {
  cakes: 0,
};

const cakes = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_CAKE:
      return {
        ...state,
        cakes: state.cakes + 1,
      };
    case DECREMENT_CAKE:
      return {
        ...state,
        cakes: state.cakes - 1,
      };
    default:
      return state;
  }
};

export default cakes;
