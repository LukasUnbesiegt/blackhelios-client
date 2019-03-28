import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { configureStore } from './store'
import './index.css';
import Routes from './routes'
import { BrowserRouter } from 'react-router-dom'
import ReduxToastr from 'react-redux-toastr'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import { ConnectedRouter } from 'connected-react-router'


const store = configureStore().store;





ReactDOM.render(

        <Provider store={store} >
                <ConnectedRouter history={configureStore().history}>


                        <div>
                                <ReduxToastr
                                        position="bottom-right"
                                        transitionIn="fadeIn"
                                        transitionOut="fadeOut"

                                />

                                <Routes />

                        </div>




                </ConnectedRouter>

        </Provider>




        , document.getElementById('root'));



