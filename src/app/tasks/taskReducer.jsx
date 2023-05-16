import { ADD_TASK } from "src/app/tasks/taskTypes";

const initialState = [];

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default taskReducer;
