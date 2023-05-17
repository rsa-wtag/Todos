import { ADD_TASK } from "src/store";

export const addTasks = (task) => {
  return {
    type: ADD_TASK,
    payload: task,
  };
};
