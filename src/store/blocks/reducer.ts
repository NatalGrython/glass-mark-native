import { createReducer } from "@reduxjs/toolkit";
import { Block } from "../../types/block";
import { deleteBlocksAction, updateBlocksAction } from "./actions";

interface BlocksState {
  blocks: Block[];
}

const initialState: BlocksState = {
  blocks: [],
};

export const blocksReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(updateBlocksAction, (state, action) => {
      state.blocks = action.payload;
    })
    .addCase(deleteBlocksAction, (state) => {
      state.blocks = [];
    })
);
