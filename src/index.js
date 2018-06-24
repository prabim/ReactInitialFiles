import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './App';

const  createStoreWirhMiddleware = applyMiddleware()(createStore );

ReactDOM.render(
    <Provider store={createStoreWirhMiddleware}>
        <App />
    </Provider>
    , document.getElementById('root'));
