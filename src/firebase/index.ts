import firebase from 'firebase';
import 'firebase/firestore';

export default () => {
  // Initialize Firebase
  const firebaseConfig = {
    apiKey: 'AIzaSyBzw0EAvAbdydNELokO76CLCwIVDVAjUzw',
    authDomain: 'epharma-mobile-apps.firebaseapp.com',
    databaseURL: 'https://epharma-mobile-apps-default-rtdb.firebaseio.com/',
    projectId: 'epharma-mobile-apps',
    storageBucket: 'epharma-mobile-apps.appspot.com',
    messagingSenderId: '54083160986',
    //   appId: 'app-id',
    //   measurementId: 'G-measurement-id',
  };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const db = firebase.firestore();

  return db;
};
