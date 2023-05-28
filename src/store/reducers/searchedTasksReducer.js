import { CLEAR_SEARCHED_TASKS, SET_SEARCHED_TASKS } from "src/store";

const initialState = [];

const searchedTasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCHED_TASKS:
      return [...action.payload];
    case CLEAR_SEARCHED_TASKS:
      return [];
    default:
      return state;
  }
};

export default searchedTasksReducer;
