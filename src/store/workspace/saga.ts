import { call, put, takeEvery, takeLeading } from "redux-saga/effects";
import { Workspace } from "../../types/workspace";
import {
  createWorkspaceAction,
  createWorkspaceRejectAction,
  createWorkspaceSuccessAction,
  uploadWorkspaceSuccessAction,
  uploadWorkspaceReject,
} from "./action";
import { CREATE_WORKSPACE, UPLOAD_WORKSPACES } from "./constants";

//@ts-ignore
const store = window?.api?.store;

function* createWorkspace(action: ReturnType<typeof createWorkspaceAction>) {
  try {
    if (store) {
      const data: Workspace = yield call(store.create, action.payload);
      yield put(createWorkspaceSuccessAction(data));
    }
    throw new Error("");
  } catch (error) {
    yield put(createWorkspaceRejectAction());
  }
}

function* uploadWorkspace() {
  try {
    if (store) {
      const data: Workspace[] = yield call(store.findAll);
      yield put(uploadWorkspaceSuccessAction(data));
    }
    throw new Error("");
  } catch (error) {
    yield put(uploadWorkspaceReject());
  }
}

export function* workspaceWatcher() {
  yield takeEvery(CREATE_WORKSPACE, createWorkspace);
  yield takeLeading(UPLOAD_WORKSPACES, uploadWorkspace);
}
