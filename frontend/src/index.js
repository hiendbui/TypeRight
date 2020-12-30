import "./assets/styles/reset.scss"
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';
import * as testActions from "./actions/test_actions";
import * as TestAPIUtil from './util/test_api_util';
import * as sessionAPIUtil from './util/session_api_util';
import * as AttemptAPIUtil from './util/attempt_api_util';
import "./main.scss";


import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decodedUser = jwt_decode(localStorage.jwtToken);
    const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };
    store = configureStore(preloadedState);

    const currentTime = Date.now() / 1000;

    if (decodedUser.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = '/login';
    }
  } else {
    store = configureStore({});
  }

  // REMEMBER TO REMOVE THIS TESTING STUFF
  window.store = store;
  window.testActions = testActions;
  window.testUtil = TestAPIUtil;
  window.sessionUtil = sessionAPIUtil;
  window.attemptUtil = AttemptAPIUtil;
  // REMEMBER TO REMOVE THIS TESTING STUFF

  const root = document.getElementById('root');

  ReactDOM.render(<Root store={store} />, root);
});