import firebase from '../firebase';
import { SUCCESS_LOG, ERROR_LOG, ERROR_IMAGE } from './types';
import _ from 'lodash';

const storage = firebase.storage();
const db = firebase.database();

export const getImgUrls = (arr, dispatch) => {
  let i = 0;
  let error = 0;
  function getUrl(path, id) {
    storage.ref(path).getDownloadURL().then((url) => {
      dispatch({
        type: ERROR_IMAGE,
        url,
        id
      })
      i++;
      error = 0;
      checkExecution();
    }).catch((e) => {
      if(error >= 3) {
        return false;
      }
      console.log('error');
      setTimeout(function () {
        error++;
        getUrl(path, id);
      }, 1000);
    });
  }
  function checkExecution() {
    if (i < arr.length) {
      const path = arr[i].path;
      // const sliceAt = path.indexOf('/') + 1;
      // const getPath = [path.slice(0, sliceAt), 'thumb_', path.slice(sliceAt)].join('');
      getUrl(path, arr[i].key);
    } else {
      return;
    }
  }
  checkExecution()
}

export const getLog = (log) => {
  return dispatch => {
    console.log(`logs/${log}`);
    db.ref(`logs/${log}`).orderByKey().limitToLast(20).on('value', snapshot => {
      if(log === 'success') {
        console.log(snapshot.val());
        dispatch({
          type: SUCCESS_LOG,
          payload: snapshot.val()
        })
      } else {
        const imageUrls = _.map(snapshot.val(), (item, key) => {
          return { key, path: item.image};
        })
        // console.log(imageUrls);
        getImgUrls(imageUrls.reverse(), dispatch);

        dispatch({
          type: ERROR_LOG,
          payload: snapshot.val()
        })
      }
    })
  }
}
