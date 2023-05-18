import { ADD_TASK } from "src/store";
import { v4 as uuidv4 } from "uuid";

export const addTasks = (task) => {
  task.id = uuidv4();
  task.is_done = false;

  return {
    type: ADD_TASK,
    payload: task,
  };
};
