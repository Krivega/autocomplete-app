import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import storeConfigure from './store-configure';
import { setEntriesData } from './actions/index';
import App from './app';

const store = storeConfigure();

store.dispatch(setEntriesData({
  entries: []
}));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

// serverActionHandler(store);
