import {
  INCREMENT_CAKES,
  DECREMENT_CAKES,
  ADD_TOPPING,
} from "../Actions/CakesActions";

const initState = {
  cakes: 0,
  cakesTopping: "",
};

const cakes = (state = initState, action) => {
  switch (action.type) {
    case INCREMENT_CAKES:
      return {
        ...state,
        cakes: state.cakes + 1,
      };

    case DECREMENT_CAKES:
      return {
        ...state,
        cakes: state.cakes - 1,
      };
    case ADD_TOPPING:
      return {
        ...state,
        cakesTopping: action.payload,
      };
    default:
      return state;
  }
};

export default cakes;
