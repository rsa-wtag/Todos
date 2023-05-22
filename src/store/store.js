import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "src/store/reducers/rootReducer";

export const store = createStore(rootReducer, composeWithDevTools());
