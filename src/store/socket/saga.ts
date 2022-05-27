import { select, takeEvery, takeLeading } from "redux-saga/effects";
import { Workspace } from "../../types/workspace";
import { LISTEN_WORKSPACE } from "../workspace/constants";

function* listenWorkSpace() {
  const workspace: Workspace = yield select((state) => state.workspace.current);
}

export function* watcherSocket() {
  takeLeading(LISTEN_WORKSPACE, listenWorkSpace);
}
