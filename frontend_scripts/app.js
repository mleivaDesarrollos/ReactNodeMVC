import React from 'react';
import ReactDOM from 'react-dom';
import Carrito from './modules/carrito';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import productApp from './reducers/products';
import "antd/dist/antd.css";

const store = createStore(productApp, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <Carrito />
    </Provider>,
    document.getElementById('root')
);