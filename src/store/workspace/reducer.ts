import { createReducer } from "@reduxjs/toolkit";
import { Workspace } from "../../types/workspace";
import {
  createWorkspaceSuccessAction,
  deleteCurrentWorkspace,
  setCurrentWorkspace,
  uploadWorkspaceSuccessAction,
} from "./action";

interface WorkSpaceState {
  workspaces: Workspace[];
  current?: Workspace;
}

const initialState: WorkSpaceState = {
  workspaces: [],
};

export const workspaceReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(createWorkspaceSuccessAction, (state, action) => {
      state.workspaces.push(action.payload);
    })
    .addCase(uploadWorkspaceSuccessAction, (state, action) => {
      state.workspaces = action.payload;
    })
    .addCase(deleteCurrentWorkspace, (state) => {
      state.current = undefined;
    })
    .addCase(setCurrentWorkspace, (state, action) => {
      state.current = action.payload;
    });
});
