// Import Firebase properly for Web SDK
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';

// Your Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyArctNi0CbBTsQA54SpxfcSTZlUlcKmwDo",
  authDomain: "vietnamshrimpfarming-9fec7.firebaseapp.com",
  databaseURL: "https://vietnamshrimpfarming-9fec7-default-rtdb.firebaseio.com",
  projectId: "vietnamshrimpfarming-9fec7",
  storageBucket: "vietnamshrimpfarming-9fec7.appspot.com",
  messagingSenderId: "275640121449",
  appId: "1:275640121449:web:60141a588e6ba8c7928af8",
  measurementId: "G-NDNJY7WNYD"
};

// **Ensure Firebase is initialized only once**
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Export Firebase services
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const database = firebase.database();
export default firebase;