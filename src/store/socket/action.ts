import { createAction } from "@reduxjs/toolkit";
import { Workspace } from "../../types/workspace";
import {
  LISTEN_STOP,
  LISTEN_WORKSPACE,
  LISTEN_WORKSPACE_REJECT,
  LISTEN_WORKSPACE_SUCCESS,
} from "./constants";

export const listenWorkSpaceAction =
  createAction<Omit<Workspace, "_id">>(LISTEN_WORKSPACE);
export const listenWorkSpaceSuccessAction = createAction(
  LISTEN_WORKSPACE_SUCCESS
);
export const listenWorkSpaceRejectAction = createAction(
  LISTEN_WORKSPACE_REJECT
);

export const listenStopAction = createAction(LISTEN_STOP);

export type SocketActions =
  | ReturnType<typeof listenWorkSpaceAction>
  | ReturnType<typeof listenWorkSpaceSuccessAction>
  | ReturnType<typeof listenWorkSpaceRejectAction>;
