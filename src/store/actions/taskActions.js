import { ADD_TASK, REMOVE_TASK } from "src/store";
import { createDate } from "src/utils/helpers/utilities";

export const addTask = (title) => ({
  type: ADD_TASK,
  payload: {
    id: Date.now().toString(),
    isCompleted: false,
    title: title,
    createdAt: createDate(),
  },
});

export const deleteTask = (taskId) => ({
  type: REMOVE_TASK,
  payload: taskId,
});
