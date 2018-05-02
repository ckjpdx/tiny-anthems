import firebase from 'firebase';
import 'firebase/firestore';
import { initFirestorter, Collection } from 'firestorter';

// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyAr_m0Ar7TDvDLwf8iJYpg_m56WAutH0Dc",
  authDomain: "tiny-anthems-20542.firebaseapp.com",
  databaseURL: "https://tiny-anthems-20542.firebaseio.com",
  projectId: "tiny-anthems-20542",
  storageBucket: "tiny-anthems-20542.appspot.com",
  messagingSenderId: "428612547407"
});

initFirestorter({ firebase: firebase });

const usersCollection = new Collection('users');
const quizzesCollection = new Collection('quizzes');

export { firebase, usersCollection, quizzesCollection };
