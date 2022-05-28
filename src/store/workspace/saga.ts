import { push } from "@lagunovsky/redux-react-router";
import { Action } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  put,
  take,
  call,
  select,
  takeEvery,
  takeLatest,
  takeLeading,
} from "redux-saga/effects";
import { TypeOf } from "yup";

import { RootAction } from "..";
import { Workspace } from "../../types/workspace";
import { deleteChainAction } from "../chain/actions";
import { workspaceSelector } from "../selectors/workspace";
import {
  listenWorkSpaceAction,
  listenWorkSpaceSuccessAction,
  listenWorkSpaceRejectAction,
  listenStopAction,
} from "../socket/action";
import {
  LISTEN_WORKSPACE_REJECT,
  LISTEN_WORKSPACE_SUCCESS,
} from "../socket/constants";
import {
  createWorkspaceAction,
  createWorkspaceSuccessAction,
  uploadWorkspaceSuccessAction,
  setCurrentWorkspace,
  selectWorkspaceAction,
  updateWorkspaceAction,
  updateWorkspaceSuccessAction,
  deleteWorkspaceSuccessAction,
} from "./action";
import {
  CREATE_WORKSPACE,
  DELETE_CURRENT_WORKSPACE,
  DELETE_WORKSPACE,
  SELECT_WORKSPACE,
  UPDATE_WORKSPACE,
  UPLOAD_WORKSPACES,
} from "./constants";

//@ts-ignore
const store = window?.api?.store;

function* listenWorkspace(workspace: Omit<Workspace, "_id">) {
  yield put(listenWorkSpaceAction(workspace));
  const action:
    | ReturnType<typeof listenWorkSpaceSuccessAction>
    | ReturnType<typeof listenWorkSpaceRejectAction> = yield take<
    Action<string>
  >([LISTEN_WORKSPACE_SUCCESS, LISTEN_WORKSPACE_REJECT]);

  switch (action.type) {
    case LISTEN_WORKSPACE_SUCCESS:
      return true;
    case LISTEN_WORKSPACE_REJECT:
      return false;
    default:
      return false;
  }
}

function* createWorkspace(action: ReturnType<typeof createWorkspaceAction>) {
  try {
    const stable = yield* listenWorkspace(action.payload);
    if (stable) {
      const newWorkspace: Workspace = yield call(store.create, action.payload);
      yield put(createWorkspaceSuccessAction(newWorkspace));
      yield put(setCurrentWorkspace(newWorkspace));
      yield put(push(`/workspace/${newWorkspace._id}/accounts`));
    }
  } catch (error) {
    yield call(toast, "Произошла неизвестная ошибка");
  }
}

function* updateWorkspace(action: ReturnType<typeof updateWorkspaceAction>) {
  try {
    const stable = yield* listenWorkspace(action.payload);
    if (stable) {
      const { _id, ...workspace } = action.payload;
      const updatedWorkspace: Workspace[] = yield call(
        store.update,
        _id,
        workspace
      );
      yield put(updateWorkspaceSuccessAction(updatedWorkspace[0]));
      yield put(setCurrentWorkspace(updatedWorkspace[0]));
      yield put(push(`/workspace/${updatedWorkspace[0]._id}/accounts`));
    }
  } catch (error) {
    yield call(toast, "Произошла неизвестная ошибка");
  }
}

function* uploadWorkspace() {
  try {
    if (store) {
      const data: Workspace[] = yield call(store.findAll);
      yield put(uploadWorkspaceSuccessAction(data));
    } else {
      yield call(toast, "Нет доступа к файлу с рабочими обласятями");
    }
  } catch (error) {
    yield call(toast, "Произошла неизвестная ошибка");
  }
}

function* deleteWorkspace(aciton: any) {
  try {
    if (store) {
      yield call(store.delete, aciton.payload._id);

      yield put(deleteWorkspaceSuccessAction(aciton.payload));
      yield put(push("/"));
    } else {
      yield call(toast, "Нет доступа к файлу с рабочими обласятями");
    }
  } catch (error) {
    yield call(toast, "Произошла неизвестная ошибка");
  }
}

function* selectWorkSpace(action: ReturnType<typeof selectWorkspaceAction>) {
  try {
    const workspaces: Workspace[] = yield select(workspaceSelector);
    const currentWorkSpace = workspaces.find(
      (workspace) => workspace._id === action.payload
    );

    if (currentWorkSpace) {
      yield put(setCurrentWorkspace(currentWorkSpace));
      yield put(push("/edit"));
    }
  } catch (error) {
    yield call(toast, "Произошла неизвестная ошибка");
  }
}

function* deleteCurrentWorkspace() {
  yield put(listenStopAction());
  yield put(deleteChainAction());
}

export function* workspaceWatcher() {
  yield takeEvery(CREATE_WORKSPACE, createWorkspace);
  yield takeLatest(UPLOAD_WORKSPACES, uploadWorkspace);
  yield takeLeading(SELECT_WORKSPACE, selectWorkSpace);
  yield takeEvery(DELETE_CURRENT_WORKSPACE, deleteCurrentWorkspace);
  yield takeLatest(UPDATE_WORKSPACE, updateWorkspace);
  yield takeEvery(DELETE_WORKSPACE, deleteWorkspace);
}
