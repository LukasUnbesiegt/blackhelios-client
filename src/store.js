import { createStore, applyMiddleware } from "redux";
import { reducers } from "./reducers/index";
import Thunk from "redux-thunk";
import io from "socket.io-client";
import { composeWithDevTools } from "redux-devtools-extension";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import {
  socketIOEmitterMiddleware,
  socketIOSubscriberMiddleware,
} from "./middlewares/socket";
import { responsiveStoreEnhancer } from "redux-responsive";
import { endpoint_ws, prodEndpoint_ws } from "./config";
const URL =
  process.env.NODE_ENV === "development" ? endpoint_ws : prodEndpoint_ws;
const history = createBrowserHistory();
// const socket = io.connect(URL);

export const configureStore = (preloadedState) => {
  const middlewares = [
    Thunk,
    routerMiddleware(history),
    // socketIOSubscriberMiddleware(socket),
    // socketIOEmitterMiddleware(socket),
  ];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const storeEnhancers = [middlewareEnhancer, responsiveStoreEnhancer];

  const composedEnhancer = composeWithDevTools(...storeEnhancers);

  const store = createStore(
    reducers(history),
    preloadedState,
    composedEnhancer
  );

  return {
    store: store,
    history: history,
  };
};
