import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './scss/main.min.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import reduxThunk from 'redux-thunk';

import firebase from './firebase';
import reducers from './reducers';
import MainRouter from './router.js';

import { AUTH_USER, UNAUTH_USER } from './actions/types';

const store = createStore(
  reducers,
  compose(
    applyMiddleware(reduxThunk),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
);

firebase.auth().onAuthStateChanged((user) => {
  if(!user) {
    localStorage.removeItem('token');
    store.dispatch({ type: UNAUTH_USER })
  }
});

const token = localStorage.getItem('token');

if(token) {
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <MainRouter />
    </Router>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
