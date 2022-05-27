import { RootState } from "..";

export const workspaceSelector = (state: RootState) =>
  state.workspace.workspaces;

export const currentWorkspaceSelector = (state: RootState) =>
  state.workspace.current;
