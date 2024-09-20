import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyArctNi0CbBTsQA54SpxfcSTZlUlcKmwDo",
  authDomain: "vietnamshrimpfarming-9fec7.firebaseapp.com",
  projectId: "vietnamshrimpfarming-9fec7",
  storageBucket: "vietnamshrimpfarming-9fec7.appspot.com",
  messagingSenderId: "275640121449",
  appId: "1:275640121449:web:60141a588e6ba8c7928af8",
  measurementId: "G-NDNJY7WNYD"
};

if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}
