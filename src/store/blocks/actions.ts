import { createAction } from "@reduxjs/toolkit";
import { Block } from "../../types/block";
import { DELETE_BLOCKS, UPDATE_BLOCKS } from "./constants";

export const updateBlocksAction = createAction<Block[]>(UPDATE_BLOCKS);
export const deleteBlocksAction = createAction(DELETE_BLOCKS);
