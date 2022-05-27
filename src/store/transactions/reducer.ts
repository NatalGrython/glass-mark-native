import { createReducer } from "@reduxjs/toolkit";
import { Transaction } from "../../types/transaction";
import { deleteTransactionsAction, updateTransactionsAction } from "./actions";

interface TransactionsState {
  transactions: Transaction[];
}

const initialState: TransactionsState = {
  transactions: [],
};

export const transactionsReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(updateTransactionsAction, (state, action) => {
      state.transactions = action.payload;
    })
    .addCase(deleteTransactionsAction, (state) => {
      state.transactions = [];
    })
);
