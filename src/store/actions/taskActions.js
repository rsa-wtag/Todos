import { createDate } from "src/utils/helpers/utilities";
import { ADD_TASK, COMPLETE_TASK, REMOVE_TASK } from "src/store";

export const addTask = (title) => ({
  type: ADD_TASK,
  payload: {
    id: Date.now().toString(),
    title: title,
    createdAt: createDate(),
    isCompleted: false,
  },
});

export const deleteTask = (taskId) => ({
  type: REMOVE_TASK,
  payload: taskId,
});

export const taskDone = (taskId) => ({
  type: COMPLETE_TASK,
  payload: taskId,
});
