import { createAction } from "@reduxjs/toolkit";
import { Transaction } from "../../types/transaction";
import {
  CANCEL_TRANSACTION,
  DELETE_TRANSACTIONS,
  UPDATE_TRANSACTIONS,
} from "./constants";

export const updateTransactionsAction =
  createAction<Transaction[]>(UPDATE_TRANSACTIONS);
export const deleteTransactionsAction = createAction(DELETE_TRANSACTIONS);

export const cancelTransactionAction = createAction<string>(CANCEL_TRANSACTION);

export type TransactionActions =
  | ReturnType<typeof updateTransactionsAction>
  | ReturnType<typeof deleteTransactionsAction>
  | ReturnType<typeof cancelTransactionAction>;
