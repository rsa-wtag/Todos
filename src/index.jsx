import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "src/store/store";
import App from "src/App";
import reportWebVitals from "src/reportWebVitals";
import "src/index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
