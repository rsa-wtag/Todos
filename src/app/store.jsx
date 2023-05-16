import { createStore } from "redux";
import rootReducer from "src/app/rootReducer";

export const store = createStore(rootReducer);
