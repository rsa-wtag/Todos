import { ADD_TASK, REMOVE_TASK } from "src/store";

export const addTasks = (task) => {
  task.id = `id-${Math.random().toString(36).substr(2, 9)}-${Date.now()}`;
  task.is_done = false;

  return {
    type: ADD_TASK,
    payload: task,
  };
};

export const deleteTask = (taskId) => {
  return {
    type: REMOVE_TASK,
    payload: taskId,
  };
};
