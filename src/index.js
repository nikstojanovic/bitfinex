import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reportWebVitals from './reportWebVitals';

import './style/main.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import dashboardReducer from './store/reducers/dashboard';
import pairDetailsReducer from './store/reducers/pairDetails';
import authReducer from './store/reducers/auth';
import errorsReducer from './store/reducers/errors';
import { watchAuth, watchDashboard, watchPairDetails } from './store/sagas/index';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
    errors: errorsReducer,
    dashboard: dashboardReducer,
    pairDetails: pairDetailsReducer,
    auth: authReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(watchAuth);
sagaMiddleware.run(watchDashboard);
sagaMiddleware.run(watchPairDetails);

const app = (
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();