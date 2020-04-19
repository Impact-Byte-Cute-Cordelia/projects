import {
  INCREMENT_ICECREAM,
  DECREMENT_ICECREAM,
} from "../Actions/IceCreamActions";

const initialState = {
  iceCream: 99999,
};

const iceCream = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_ICECREAM:
      return {
        ...state,
        iceCream: state.iceCream + 1,
      };
    case DECREMENT_ICECREAM:
      return {
        ...state,
        iceCream: state.iceCream - 1,
      };
    default:
      return state;
  }
};

export default iceCream;
