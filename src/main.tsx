import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";
import { ReduxRouter } from "@lagunovsky/redux-react-router";
import { history } from "./utils/history";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ReduxRouter store={store} history={history}>
        <ToastContainer position="bottom-right" />
        <App />
      </ReduxRouter>
    </Provider>
  </React.StrictMode>
);
