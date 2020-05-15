import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Reducer } from './reducers/Reducer';

const composeEnhance = window._REDUX_DEVTOOLS_EXTENTION_COMPOSE_|| compose;

const store = createStore(
    Reducer,
    composeEnhance(applyMiddleware(thunk))
);


ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>, 
    document.getElementById("root")); 
