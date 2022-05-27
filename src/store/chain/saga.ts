import { push } from "@lagunovsky/redux-react-router";
import { put, takeEvery } from "redux-saga/effects";
import { Address } from "../../types/address";
import { Block } from "../../types/block";
import { Transaction } from "../../types/transaction";
import {
  deleteAddressesAction,
  updateAddressesAction,
} from "../adresses/actions";
import { deleteBlocksAction, updateBlocksAction } from "../blocks/actions";
import {
  deleteTransactionsAction,
  updateTransactionsAction,
} from "../transactions/actions";
import { updateChainAction } from "./actions";
import { DELETE_CHAIN, UPDATE_CHAIN } from "./constants";

const getAddresses = (chain: Block[]) => {
  const currentBlocks = [...chain].reverse();
  const set = new Set<string>();
  const accounts = currentBlocks.reduce<Address[]>((acc, item) => {
    for (const [address, balance] of Object.entries(item.mappingData)) {
      if (!set.has(address)) {
        acc.push({ address, balance: balance as number });
        set.add(address);
      }
    }
    return acc;
  }, []);
  return accounts;
};

function* updateChain(action: ReturnType<typeof updateChainAction>) {
  const chain = action.payload;

  const blocks = chain;

  yield put(updateBlocksAction(blocks));

  const transactions = chain.reduce<Transaction[]>((acc, block) => {
    block.transactions.forEach((transaction) => {
      acc.push(transaction);
    });
    return acc;
  }, []);

  yield put(updateTransactionsAction(transactions));

  const address = getAddresses(chain);

  yield put(updateAddressesAction(address));
}

function* deleteChain() {
  yield put(deleteBlocksAction());
  yield put(deleteTransactionsAction());
  yield put(deleteAddressesAction());
  yield put(push("/"));
}

export function* chainWatcher() {
  yield takeEvery(UPDATE_CHAIN, updateChain);
  yield takeEvery(DELETE_CHAIN, deleteChain);
}
