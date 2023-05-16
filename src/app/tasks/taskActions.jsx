import { ADD_TASK } from "src/app/tasks/taskTypes";

export const addTasks = (task) => {
  return {
    type: ADD_TASK,
    payload: task,
  };
};
