import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form';
import userReducer from './userReducer'
import errors from './errorsReducer'
import localeReducer from './localeReducer'
import { responsiveStateReducer } from 'redux-responsive'
import { reducer as toastrReducer } from 'react-redux-toastr'
import asyncReducer from './asyncReducer';
import modalReducer from '../components/misc/modalManager/modalReducer'
import errorsReducer from './errorsReducer';



export const reducers = (history) => combineReducers({
        router: connectRouter(history),
        form: formReducer,
        user: userReducer,
        toastr: toastrReducer,
        async: asyncReducer,
        modal: modalReducer,
        errors: errorsReducer,
        browser: responsiveStateReducer
})
