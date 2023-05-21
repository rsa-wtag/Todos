import { ADD_TASK, REMOVE_TASK } from "src/store";
import { createDate } from "src/utils/helpers/createDate";

export const addTasks = (title) => {
  return {
    type: ADD_TASK,
    payload: {
      id: Date.now().toString(),
      isCompleted: false,
      title: title,
      createdAt: createDate(),
    },
  };
};

export const deleteTask = (taskId) => {
  return {
    type: REMOVE_TASK,
    payload: taskId,
  };
};
