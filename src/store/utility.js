export const updateState = (state, updateValue) => {
  return {
    ...state,
    ...updateValue,
  };
};
