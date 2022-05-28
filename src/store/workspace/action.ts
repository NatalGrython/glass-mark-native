import { createAction } from "@reduxjs/toolkit";
import { Workspace } from "../../types/workspace";
import {
  CREATE_WORKSPACE,
  CREATE_WORKSPACE_SUCCESS,
  DELETE_CURRENT_WORKSPACE,
  DELETE_WORKSPACE,
  DELETE_WORKSPACE_SUCCESS,
  SELECT_WORKSPACE,
  SET_CURRENT_WORKSPACE,
  UPDATE_WORKSPACE,
  UPDATE_WORKSPACE_SUCCESS,
  UPLOAD_WORKSPACES,
  UPLOAD_WORKSPACES_SUCCESS,
} from "./constants";

export const createWorkspaceAction =
  createAction<Omit<Workspace, "_id">>(CREATE_WORKSPACE);
export const createWorkspaceSuccessAction = createAction<Workspace>(
  CREATE_WORKSPACE_SUCCESS
);

export const uploadWorkspaceAction = createAction(UPLOAD_WORKSPACES);
export const uploadWorkspaceSuccessAction = createAction<Workspace[]>(
  UPLOAD_WORKSPACES_SUCCESS
);

export const deleteCurrentWorkspace = createAction(DELETE_CURRENT_WORKSPACE);
export const setCurrentWorkspace = createAction<Workspace>(
  SET_CURRENT_WORKSPACE
);

export const selectWorkspaceAction = createAction<string>(SELECT_WORKSPACE);

export const updateWorkspaceAction = createAction<Workspace>(UPDATE_WORKSPACE);
export const updateWorkspaceSuccessAction = createAction<Workspace>(
  UPDATE_WORKSPACE_SUCCESS
);

export const deleteWorkspaceAction = createAction(DELETE_WORKSPACE);
export const deleteWorkspaceSuccessAction = createAction(
  DELETE_WORKSPACE_SUCCESS
);

export type WorkspaceActions =
  | ReturnType<typeof createWorkspaceAction>
  | ReturnType<typeof createWorkspaceSuccessAction>
  | ReturnType<typeof uploadWorkspaceAction>
  | ReturnType<typeof uploadWorkspaceSuccessAction>
  | ReturnType<typeof deleteCurrentWorkspace>
  | ReturnType<typeof setCurrentWorkspace>
  | ReturnType<typeof selectWorkspaceAction>
  | ReturnType<typeof updateWorkspaceAction>
  | ReturnType<typeof updateWorkspaceSuccessAction>;
