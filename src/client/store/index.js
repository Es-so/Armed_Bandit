import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducer';

const configureStore = initialState => createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(thunk, createLogger())),
);

export default configureStore;
