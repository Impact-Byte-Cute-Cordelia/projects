export const INCREMENT_CAKES = "INCREMENT_CAKES";
export const DECREMENT_CAKES = "DECREMENT_CAKES";
export const ADD_TOPPING = "ADD_TOPPING";

export const addCakes = () => {
  return {
    type: INCREMENT_CAKES,
  };
};

export const minusCakes = () => {
  return {
    type: DECREMENT_CAKES,
  };
};

export const addTopping = () => {
  return {
    type: ADD_TOPPING,
    payload,
  };
};
