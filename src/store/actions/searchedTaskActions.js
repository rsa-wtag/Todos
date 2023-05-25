import { SET_SEARCHED_TASKS } from "src/store";

export const setSearchedTasks = (tasks) => {
  return {
    type: SET_SEARCHED_TASKS,
    payload: tasks,
  };
};
