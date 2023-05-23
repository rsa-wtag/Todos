import { ADD_TASK, COMPLETE_TASK, REMOVE_TASK } from "src/store";

const initialState = [];
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [action.payload, ...state];
    case REMOVE_TASK:
      return state.filter((task) => task.id !== action.payload);
    case COMPLETE_TASK:
      return state.map((task) => {
        if (task.id === action.payload) {
          return { ...task, isCompleted: true };
        }
        return task;
      });
    default:
      return state;
  }
};

export default taskReducer;
