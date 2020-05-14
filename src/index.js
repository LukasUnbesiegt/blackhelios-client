import React from "react";
import ReactDOM from "react-dom";
import { Provider, ReactReduxContext } from "react-redux";
import { configureStore } from "./store";
import Routes from "./routes";
import { ConnectedRouter } from "connected-react-router";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "./components/styles/global";
// CSS IMPORTING
import "./index.css";
import "react-quill/dist/quill.snow.css"; // ES6
const store = configureStore().store;

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={configureStore().history}>
      <div>
        <MuiThemeProvider theme={theme}>
          <Routes />
        </MuiThemeProvider>
      </div>
    </ConnectedRouter>
  </Provider>,

  document.getElementById("root")
);
