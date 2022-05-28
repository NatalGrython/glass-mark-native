import { createReducer } from "@reduxjs/toolkit";
import { Workspace } from "../../types/workspace";
import {
  createWorkspaceSuccessAction,
  deleteCurrentWorkspace,
  deleteWorkspaceAction,
  setCurrentWorkspace,
  updateWorkspaceSuccessAction,
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
    .addCase(updateWorkspaceSuccessAction, (state, action) => {
      state.workspaces = state.workspaces.map((item) => {
        if (item._id === action.payload._id) {
          return action.payload;
        }
        return item;
      });
    })
    .addCase(deleteWorkspaceAction, (state, action) => {
      state.workspaces = state.workspaces.filter(
        (item) => item._id !== action.payload._id
      );
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
