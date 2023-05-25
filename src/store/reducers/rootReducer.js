import { combineReducers } from "redux";
import taskReducer from "src/store/reducers/taskReducer";
import numOfVisibleTasksReducer from "src/store/reducers/numOfVisibleTaskReducer";
import searchedTasksReducer from "src/store/reducers/searchedTasksReducer";

const rootReducer = combineReducers({
  todos: taskReducer,
  numOfVisibleTasks: numOfVisibleTasksReducer,
  searchedTasks: searchedTasksReducer,
});

export default rootReducer;
