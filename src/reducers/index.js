import { combineReducers } from "redux";
import userReducer from "./userReducer";
import errors from "./errorsReducer";
import localeReducer from "./localeReducer";
import { responsiveStateReducer } from "redux-responsive";
import asyncReducer from "./asyncReducer";
import errorsReducer from "./errorsReducer";
import modalReducer from "../components/reusable/modalManager/modalReducer";
import { connectRouter } from "connected-react-router";

export const reducers = history =>
	combineReducers({
		router: connectRouter(history),
		locale: localeReducer,
		user: userReducer,
		async: asyncReducer,
		errors: errorsReducer,
		browser: responsiveStateReducer,
		modal: modalReducer
	});
