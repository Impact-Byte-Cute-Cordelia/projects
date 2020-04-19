export const INCREMENT_ICECREAM = "INCREMENT_ICECREAM";
export const DECREMENT_ICECREAM = "DECREMENT_ICECREAM";

export const addIceCream = () => {
  return {
    type: INCREMENT_ICECREAM,
  };
};

export const minusIceCream = () => {
  return {
    type: DECREMENT_ICECREAM,
  };
};
