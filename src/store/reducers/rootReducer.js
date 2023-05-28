import { combineReducers } from "redux";
import taskReducer from "src/store/reducers/taskReducer";
import numOfVisibleTasksReducer from "src/store/reducers/numOfVisibleTaskReducer";
import searchedTasksReducer from "src/store/reducers/searchedTasksReducer";
import showSearchedTasksReducer from "src/store/reducers/showSearchedTasksReducer";

const rootReducer = combineReducers({
  todos: taskReducer,
  numOfVisibleTasks: numOfVisibleTasksReducer,
  searchedTasks: searchedTasksReducer,
  showSearchedTasks: showSearchedTasksReducer,
});

export default rootReducer;
