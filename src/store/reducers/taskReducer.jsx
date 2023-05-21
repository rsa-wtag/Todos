import { ADD_TASK } from "src/store";

const initialState = [];
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [action.payload, ...state];
    default:
      return state;
  }
};

export default taskReducer;
