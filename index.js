/**
 * @format
 */

 import React from 'react';

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import 'react-native-gesture-handler';


import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import promiseMiddleware  from "redux-promise";


import reducers from './src/iRedux/reducers';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const myStore = createStore(reducers, composeEnhancers(applyMiddleware(promiseMiddleware)));



const appRedux = () => (
    <Provider store={myStore}>
        <App />
    </Provider>
);

AppRegistry.registerComponent(appName, () => appRedux);
