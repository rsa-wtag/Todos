import { combineReducers } from "redux";
import taskReducer from "src/store/reducers/taskReducer";

const rootReducer = combineReducers({
  todos: taskReducer,
});

export default rootReducer;
