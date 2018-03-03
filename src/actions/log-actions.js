import firebase from '../firebase';
import { SUCCESS_LOG, ERROR_LOG } from './types';

const storage = firebase.storage();
const db = firebase.database();

export const getImgUrl = (path) => {
  storage.ref(path);
}

export const getLog = (log) => {
  return dispatch => {
    console.log(`logs/${log}`);
    db.ref(`logs/${log}`).orderByKey().limitToLast(50).on('value', snapshot => {
      if(log === 'success') {
        console.log(snapshot.val());
        dispatch({
          type: SUCCESS_LOG,
          payload: snapshot.val()
        })
      } else {
        console.log(snapshot.val());
      }
    })
  }
}
