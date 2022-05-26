import { RootState } from "..";

export const workspaceSelector = (state: RootState) =>
  state.workspace.workspaces;
