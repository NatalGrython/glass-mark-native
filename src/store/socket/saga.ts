import { eventChannel } from "redux-saga";
import {
  call,
  cancel,
  cancelled,
  fork,
  put,
  take,
  takeLeading,
} from "redux-saga/effects";
import { io } from "socket.io-client";
import { updateChainAction } from "../chain/actions";
import {
  listenWorkSpaceAction,
  listenWorkSpaceRejectAction,
  listenWorkSpaceSuccessAction,
} from "./action";
import {
  LISTEN_STOP,
  LISTEN_WORKSPACE,
  LISTEN_WORKSPACE_REJECT,
} from "./constants";

const wsClient = (host: string, port: number) =>
  eventChannel((emitter) => {
    const client = io(`http://${host}:${port}/events`);

    client.on("error", (error) => {
      //@ts-ignore
      emitter(listenWorkSpaceRejectAction(error.message));
    });

    client.on("connect_error", (error) => {
      //@ts-ignore
      emitter(listenWorkSpaceRejectAction(error.message));
    });

    client.on("connect", () => {
      emitter(listenWorkSpaceSuccessAction());
    });

    client.on("disconnect", () => {
      emitter({ type: "DISCONNECT" });
    });

    client.on("chain", (data) => {
      emitter(updateChainAction(data));
    });

    client.on("block", (data) => {
      emitter({ type: "GET_BLOCK_EVENT", payload: data });
    });

    client.on("mining", (data) => {
      emitter({ type: "MINING", payload: data });
    });

    client.on("transaction", (data) => {
      emitter({ type: "CREATE_TRANSACTION_EVENT", payload: data });
    });

    client.on("owner", (data) => {
      emitter({ type: "GET_OWNER_EVENT", payload: data });
    });

    client.on("user", (data) => {
      emitter({ type: "CREATE_USER_EVENT", payload: data });
    });

    client.on("balance", (data) => {
      emitter({ type: "GET_BALANCE_EVENT", payload: data });
    });

    return () => {
      client.close();
    };
  });

function* listenSaga(host: string, port: number) {
  const nodeChannel: ReturnType<typeof wsClient> = yield call(
    wsClient,
    host,
    port
  );

  try {
    while (true) {
      //@ts-ignore
      const action = yield take(nodeChannel);
      yield put(action);
    }
  } catch (error) {
    nodeChannel.close();
  } finally {
    //@ts-ignore
    if (yield cancelled()) {
      nodeChannel.close();
    }
  }
}

function* listenWorkSpace(action: ReturnType<typeof listenWorkSpaceAction>) {
  //@ts-ignore
  const listenTask = yield fork(
    listenSaga,
    action.payload.host,
    action.payload.port
  );

  yield take([LISTEN_WORKSPACE_REJECT, LISTEN_STOP]);

  yield cancel(listenTask);
}

export function* watcherSocket() {
  yield takeLeading(LISTEN_WORKSPACE, listenWorkSpace);
}
