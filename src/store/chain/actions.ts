import { createAction } from "@reduxjs/toolkit";
import { Block } from "../../types/block";
import { DELETE_CHAIN, UPDATE_CHAIN } from "./constants";

export const updateChainAction = createAction<Block[]>(UPDATE_CHAIN);
export const deleteChainAction = createAction(DELETE_CHAIN);

export type ChainActions =
  | ReturnType<typeof updateChainAction>
  | ReturnType<typeof deleteChainAction>;
