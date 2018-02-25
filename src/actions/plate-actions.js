import firebase from '../firebase';
import { CURRENT_PLATE } from './types';

const db = firebase.database();

export const currentPlate = () => {
  return disptach => {
    db.ref('plate').on('value', snapshot => {
      disptach({
        type: CURRENT_PLATE,
        plate: snapshot.val().plate
      })
    })
  }
}
