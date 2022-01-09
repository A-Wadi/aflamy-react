const initState = {
  data: [],
};

const reducer = (state = initState, action) => {
  if (action.type === "ADDALLDATA") {
    return {
      ...state,
      data: action.payload,
    };
  }
  return state;
};

export default reducer;
