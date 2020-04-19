export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const addCakes = () => {
  return {
    type: INCREMENT,
  };
};

export const minusCakes = () => {
  return {
    type: DECREMENT,
  };
};
