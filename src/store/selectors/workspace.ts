import { RootState } from "..";

export const workspaceSelector = (state: RootState) =>
  state.workspace.workspaces;

export const currentWorkspaceSelector = (state: RootState) =>
  state.workspace.current;

export const addressSelector = (state: RootState) => state.address.addresses;

export const blocksSelector = (state: RootState) => state.block.blocks;

export const transactionSelector = (state: RootState) =>
  state.transaction.transactions;
