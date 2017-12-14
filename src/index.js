import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// Redux Imports Here:
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';

// Function for Store with Middleware Applied to it.
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

// Store with reducers and devtools extensions.
const store = createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION && window.window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    < Provider store={store}>
        < App />
    </ Provider >
    ,
    document.getElementById('root'));
registerServiceWorker();
