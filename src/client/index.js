import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import configureStore from './store';
import { loadFruits } from './actions'

const initialState = {
  fruits: [
    { id: 0, icon: 'spinner', color: ''},
    { id: 1, icon: 'spinner', color: ''},
    { id: 2, icon: 'spinner', color: ''},
    { id: 3, icon: 'spinner', color: ''},
    { id: 4, icon: 'spinner', color: ''},
  ],
};

const store = configureStore(initialState);

window.store = store;

console.log('mounting react app ...');  // eslint-disable-line no-console

store.dispatch(loadFruits());

render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('__TODO__')
);
