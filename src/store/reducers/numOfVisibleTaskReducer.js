import { LOAD_MORE, SET_NUM_OF_VISIBLE_TASKS } from "src/store";

const initialState = {
  numOfVisibleTasks: 0,
};

const numOfVisibleTasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NUM_OF_VISIBLE_TASKS:
      return {
        ...state,
        numOfVisibleTasks: action.payload,
      };
    default:
      return state;
  }
};

export default numOfVisibleTasksReducer;
