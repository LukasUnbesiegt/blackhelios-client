import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, ReactReduxContext } from 'react-redux'
import { configureStore } from './store'
import Routes from './routes'
import ReduxToastr from 'react-redux-toastr'
import { ConnectedRouter } from 'connected-react-router'


// CSS IMPORTING
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/font-awesome/css/font-awesome.min.css";
import "./assets/css/argon-design-system-react.css";
import './index.css';




const store = configureStore().store;



ReactDOM.render(

        <Provider store={store} >
                <ConnectedRouter history={configureStore().history}>

                        <ReduxToastr
                                position="bottom-right"
                                transitionIn="fadeIn"
                                transitionOut="fadeOut"
                                timeOut={2000}

                        />

                        <div>

                                <Routes />

                        </div>




                </ConnectedRouter>

        </Provider>




        , document.getElementById('root'));



