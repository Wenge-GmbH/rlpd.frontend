import firebase from '../firebase';
import { GET_SETTINGS } from './types';

const db = firebase.database();

export const getSettings = () => dispatch => {
  console.log('asd');
  db.ref('settings').on('value', (snapshot) => {
    console.log(snapshot.val());
    console.log('hi');
    dispatch({
      type: GET_SETTINGS,
      payload: snapshot.val()
    })
  })
}

export const updateSettings = (values) => dispatch => {
  const { success, error, nighttime } = values;
  let updates = {
    interval: {
      success: Number(success),
      error: Number(error),
      nighttime: Number(nighttime),
    }
  }
  db.ref('settings').update(updates);
}

export const stopDetection = (bool) => dispatch => {
  const updates = {
    stopped: !bool
  }
  db.ref('settings').update(updates);
}
