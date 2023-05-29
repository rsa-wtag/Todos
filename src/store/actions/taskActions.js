import { ADD_TASK } from "src/store";
import { createDate } from "src/utils/helpers/utilities";

export const addTask = (title) => {
  return {
    type: ADD_TASK,
    payload: {
      id: Date.now().toString(),
      title,
      createdAt: createDate(),
    },
  };
};
