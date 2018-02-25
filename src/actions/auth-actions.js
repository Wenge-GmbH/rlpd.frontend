import firebase from '../firebase';
import uuidv4 from 'uuid/v4';

import { AUTH_USER, UNAUTH_USER } from './types';

export const signinUser = ({email, password},callback) => {
  return dispatch => {
    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
      dispatch({ type: AUTH_USER })
      localStorage.setItem('token', uuidv4());
      callback('/');
    }).catch((e) => {
      console.log(e.code, e.message);
    });
  }
}

export const signoutUser = () => {
  return dispatch => {
    firebase.auth().signOut().then(() => {
      localStorage.removeItem('token');
      dispatch({ type: UNAUTH_USER });
    }).catch((e) => {
      console.log(e);
    });
  }
}
