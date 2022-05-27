import { push } from "@lagunovsky/redux-react-router";
import {
  call,
  put,
  select,
  take,
  takeEvery,
  takeLeading,
} from "redux-saga/effects";
import { Workspace } from "../../types/workspace";
import { workspaceSelector } from "../selectors/workspace";
import {
  listenWorkSpaceAction,
  listenWorkSpaceSuccessAction,
  listenWorkSpaceRejectAction,
} from "../socket/action";
import {
  LISTEN_WORKSPACE_REJECT,
  LISTEN_WORKSPACE_SUCCESS,
} from "../socket/constants";
import {
  createWorkspaceAction,
  createWorkspaceRejectAction,
  createWorkspaceSuccessAction,
  uploadWorkspaceSuccessAction,
  uploadWorkspaceReject,
  setCurrentWorkspace,
  selectWorkspaceAction,
} from "./action";
import {
  CREATE_WORKSPACE,
  SELECT_WORKSPACE,
  UPLOAD_WORKSPACES,
} from "./constants";

//@ts-ignore
const store = window?.api?.store;

function* createWorkspace(action: ReturnType<typeof createWorkspaceAction>) {
  try {
    yield put(listenWorkSpaceAction(action.payload));
    const result:
      | ReturnType<typeof listenWorkSpaceSuccessAction>
      | ReturnType<typeof listenWorkSpaceRejectAction> = yield take([
      LISTEN_WORKSPACE_SUCCESS,
      LISTEN_WORKSPACE_REJECT,
    ]);

    switch (result.type) {
      case LISTEN_WORKSPACE_SUCCESS:
        if (store) {
          const data: Workspace = yield call(store.create, action.payload);
          yield put(createWorkspaceSuccessAction(data));
          yield put(setCurrentWorkspace(data));
          yield put(push(`/workspace/${data._id}/accounts`));
        }
        throw new Error("");
        break;
      case LISTEN_WORKSPACE_REJECT:
        throw new Error("");
      default:
        throw new Error("");
    }
  } catch (error) {
    yield put(createWorkspaceRejectAction());
  }
}

function* selectWorkSpace(action: ReturnType<typeof selectWorkspaceAction>) {
  try {
    const workspaces: Workspace[] = yield select(workspaceSelector);
    const currentWorkSpace = workspaces.find(
      (workspace) => workspace._id === action.payload
    );
    if (currentWorkSpace) {
      yield put(listenWorkSpaceAction(currentWorkSpace));
      const result:
        | ReturnType<typeof listenWorkSpaceSuccessAction>
        | ReturnType<typeof listenWorkSpaceRejectAction> = yield take([
        LISTEN_WORKSPACE_SUCCESS,
        LISTEN_WORKSPACE_REJECT,
      ]);
      switch (result.type) {
        case LISTEN_WORKSPACE_SUCCESS:
          yield put(setCurrentWorkspace(currentWorkSpace));
          yield put(push(`/workspace/${currentWorkSpace._id}/accounts`));
          break;
        case LISTEN_WORKSPACE_REJECT:
          throw new Error("");
        default:
          throw new Error("");
      }
    }
  } catch (error) {
    console.log(error);
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
  yield takeLeading(SELECT_WORKSPACE, selectWorkSpace);
}
