const initialState = 3;
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MORE:
      return state + initialState;
    default:
      return state;
  }
};
