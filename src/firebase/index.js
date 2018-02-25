import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

var config = {
    apiKey: "AIzaSyCCkCXNYH1s85hZay8H6peNv0pj-YEYFLo",
    authDomain: "licence-plate-detection.firebaseapp.com",
    databaseURL: "https://licence-plate-detection.firebaseio.com",
    projectId: "licence-plate-detection",
    storageBucket: "licence-plate-detection.appspot.com",
    messagingSenderId: "33496548395"
  };

firebase.initializeApp(config);

export default firebase;
