import { createAction } from "@reduxjs/toolkit";
import { Workspace } from "../../types/workspace";
import {
  CREATE_WORKSPACE,
  CREATE_WORKSPACE_REJECT,
  CREATE_WORKSPACE_SUCCESS,
  DELETE_CURRENT_WORKSPACE,
  UPLOAD_WORKSPACES,
  UPLOAD_WORKSPACES_REJECT,
  UPLOAD_WORKSPACES_SUCCESS,
} from "./constants";

export const createWorkspaceAction =
  createAction<Partial<Workspace>>(CREATE_WORKSPACE);
export const createWorkspaceSuccessAction = createAction<Workspace>(
  CREATE_WORKSPACE_SUCCESS
);
export const createWorkspaceRejectAction = createAction(
  CREATE_WORKSPACE_REJECT
);

export const uploadWorkspaceAction = createAction(UPLOAD_WORKSPACES);
export const uploadWorkspaceSuccessAction = createAction<Workspace[]>(
  UPLOAD_WORKSPACES_SUCCESS
);
export const uploadWorkspaceReject = createAction(UPLOAD_WORKSPACES_REJECT);

export const deleteCurrentWorkspace = createAction(DELETE_CURRENT_WORKSPACE);
