import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store";
import App from "./App";
import { ReduxRouter } from "@lagunovsky/redux-react-router";
import { history } from "./utils/history";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ReduxRouter store={store} history={history}>
        <App />
      </ReduxRouter>
    </Provider>
  </React.StrictMode>
);
