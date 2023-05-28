import { SHOW_SEARCHED_TASKS } from "src/store";

const initialState = false;

const showSearchedTasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SEARCHED_TASKS:
      return !state;
    default:
      return state;
  }
};

export default showSearchedTasksReducer;
