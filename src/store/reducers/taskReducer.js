import { parse, differenceInDays } from "date-fns";
import {
  ADD_TASK,
  COMPLETE_TASK,
  EDIT_TASK,
  REMOVE_TASK,
  REVERT_TASK,
  SAVE_AND_DONE_TASK,
} from "src/store";

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
          const createdAt = parse(task.createdAt, "dd.MM.yy", new Date());
          const currentDate = new Date();
          const daysToComplete = differenceInDays(currentDate, createdAt) + 1;

          return { ...task, isCompleted: true, daysToComplete: daysToComplete };
        }
        return task;
      });
    case EDIT_TASK:
      return state.map((task) => {
        if (task.id === action.payload.taskId) {
          return {
            ...task,
            title: action.payload.editedTask,
          };
        }
        return task;
      });
    case SAVE_AND_DONE_TASK:
      return state.map((task) => {
        if (task.id === action.payload.taskId) {
          const createdAt = parse(task.createdAt, "dd.MM.yy", new Date());
          const currentDate = new Date();
          const daysToComplete = differenceInDays(currentDate, createdAt) + 1;

          return {
            ...task,
            isCompleted: true,
            daysToComplete: daysToComplete,
            title: action.payload.editedTask,
          };
        }
        return task;
      });
    case REVERT_TASK:
      return state;
    default:
      return state;
  }
};

export default taskReducer;
