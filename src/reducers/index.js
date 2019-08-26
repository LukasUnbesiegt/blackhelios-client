import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import userReducer from "./userReducer";
import errors from "./errorsReducer";
import localeReducer from "./localeReducer";
import { responsiveStateReducer } from "redux-responsive";
import asyncReducer from "./asyncReducer";
import errorsReducer from "./errorsReducer";
import { connectRouter } from "connected-react-router";

export const reducers = history =>
	combineReducers({
		router: connectRouter(history),
		locale: localeReducer,
		form: formReducer,
		user: userReducer,
		async: asyncReducer,
		errors: errorsReducer,
		browser: responsiveStateReducer
	});
