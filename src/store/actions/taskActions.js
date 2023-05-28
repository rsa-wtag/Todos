import { ADD_TASK } from "src/store";
import createDate from "src/utils/helpers/createDate";

export const addTask = (title) => {
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
