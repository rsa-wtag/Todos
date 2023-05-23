import {
  ADD_TASK,
  COMPLETE_TASK,
  EDIT_TASK,
  REMOVE_TASK,
  SAVE_AND_DONE_TASK,
} from "src/store";
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

export const taskDone = (taskId) => {
  return {
    type: COMPLETE_TASK,
    payload: taskId,
  };
};

export const editTask = (taskId, editedTask) => {
  return {
    type: EDIT_TASK,
    payload: { taskId, editedTask },
  };
};

export const saveAndDoneTask = (taskId, editedTask) => {
  return {
    type: SAVE_AND_DONE_TASK,
    payload: { taskId, editedTask },
  };
};
