import { combineReducers } from "redux";
import taskReducer from "src/store/reducers/taskReducer";
import numOfVisibleTasksReducer from "src/store/reducers/numOfVisibleTaskReducer";

const rootReducer = combineReducers({
  todos: taskReducer,
  numOfVisibleTasks: numOfVisibleTasksReducer,
});

export default rootReducer;
