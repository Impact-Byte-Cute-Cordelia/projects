export const INCREMENT_CAKE = "INCREMENT_CAKE";
export const DECREMENT_CAKE = "DECREMENT_CAKE";

export const addCakes = () => {
  return {
    type: INCREMENT_CAKE,
  };
};

export const minusCakes = () => {
  return {
    type: DECREMENT_CAKE,
  };
};
