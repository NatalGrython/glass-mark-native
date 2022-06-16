import axios from "axios";
import { toast } from "react-toastify";
import { call, select, takeLatest } from "redux-saga/effects";
import { currentWorkspaceSelector } from "../selectors/workspace";
import { cancelTransactionAction } from "./actions";
import { CANCEL_TRANSACTION } from "./constants";

function* cancelTransaction(
  action: ReturnType<typeof cancelTransactionAction>
) {
  const workspace: ReturnType<typeof currentWorkspaceSelector> = yield select(
    currentWorkspaceSelector
  );
  if (workspace) {
    try {
      yield call(
        axios.post,
        `http://${workspace.host}:${workspace.port}/api/transaction/cancel`,
        { hash: action.payload }
      );
    } catch (error) {
      yield call(toast, "Ошибка при отменен транзакции");
    }
  }
}

export function* transactionWatcher() {
  yield takeLatest(CANCEL_TRANSACTION, cancelTransaction);
}
