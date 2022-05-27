import { createAction } from "@reduxjs/toolkit";
import { Workspace } from "../../types/workspace";
import {
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
