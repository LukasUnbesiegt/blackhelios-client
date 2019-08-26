import React from "react";
import ReactDOM from "react-dom";
import { Provider, ReactReduxContext } from "react-redux";
import { configureStore } from "./store";
import Routes from "./routes";
import { ConnectedRouter } from "connected-react-router";

// CSS IMPORTING
import "./index.css";

const store = configureStore().store;

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={configureStore().history}>
			<div>
				<Routes />
			</div>
		</ConnectedRouter>
	</Provider>,

	document.getElementById("root")
);
