import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import { workspaceReducer } from "./workspace/reducer";
import { workspaceWatcher } from "./workspace/saga";

function* rootSaga() {
  yield all([workspaceWatcher()]);
}

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    workspace: workspaceReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware);
  },
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
