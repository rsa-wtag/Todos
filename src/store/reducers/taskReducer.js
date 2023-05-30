// import { parse, differenceInDays } from "date-fns";
import { ADD_TASK, COMPLETE_TASK, REMOVE_TASK } from "src/store";
import { timeToCompleteTask } from "src/utils/helpers/utilities";

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
          const daysToComplete = timeToCompleteTask(task.createdAt);

          return { ...task, isCompleted: true, daysToComplete };
        }
        return task;
      });
    default:
      return state;
  }
};

export default taskReducer;
