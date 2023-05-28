import { CLEAR_SEARCHED_TASKS, SET_SEARCHED_TASKS } from "src/store";

export const setSearchedTasks = (tasks) => {
  return {
    type: SET_SEARCHED_TASKS,
    payload: tasks,
  };
};

export const clearSearchedTasks = (tasks) => {
  return {
    type: CLEAR_SEARCHED_TASKS,
  };
};
