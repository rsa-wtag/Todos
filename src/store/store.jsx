import { createStore } from "redux";
import rootReducer from "src/store/reducers/rootReducer";

export const store = createStore(rootReducer);
