import { LOAD_MORE, SET_NUM_OF_VISIBLE_TASKS } from "src/store";

export const setNumOfVisibleTasks = (numOfVisibleTasks) => {
  return {
    type: SET_NUM_OF_VISIBLE_TASKS,
    payload: numOfVisibleTasks,
  };
};
