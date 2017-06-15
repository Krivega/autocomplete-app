import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import io from 'socket.io-client';
import reducer from './reducer';
import remoteActionMiddleware from './remote-action-middleware';
import serverActionHandler from './server-action-handler';
import {setEntriesData} from './actions';
import App from './app';

const socket = io(`${location.protocol}//${location.hostname}:8090`);
const createStoreWithMiddleware = applyMiddleware(
  remoteActionMiddleware(socket)
)(createStore);

const store = createStoreWithMiddleware(reducer);

store.dispatch(setEntriesData({
  entries: []
}));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

serverActionHandler(socket, store);
