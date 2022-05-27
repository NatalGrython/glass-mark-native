import {
  createRouterMiddleware,
  createRouterReducer,
} from "@lagunovsky/redux-react-router";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import { workspaceReducer } from "./workspace/reducer";
import { workspaceWatcher } from "./workspace/saga";
import { history } from "../utils/history";
import { watcherSocket } from "./socket/saga";

function* rootSaga() {
  yield all([workspaceWatcher(), watcherSocket()]);
}

const sagaMiddleware = createSagaMiddleware();
const routerMiddleware = createRouterMiddleware(history);

export const store = configureStore({
  reducer: {
    workspace: workspaceReducer,
    //@ts-ignore
    router: createRouterReducer(history),
  },
  //@ts-ignore
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({ thunk: false })
      .concat(sagaMiddleware)
      .concat(routerMiddleware);
  },
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
