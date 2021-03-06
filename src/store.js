import firebase from 'firebase';
import 'firebase/firestore';
import { initFirestorter, Collection, Document } from 'firestorter';

// Initialize Firebase
firebase.initializeApp({
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: "tiny-anthems-2043a.firebaseapp.com",
  databaseURL: "https://tiny-anthems-2043a.firebaseio.com",
  projectId: "tiny-anthems-2043a",
  storageBucket: "tiny-anthems-2043a.appspot.com",
  messagingSenderId: "320797952888"
});

initFirestorter({ firebase: firebase });

const quizzesCollection = new Collection('quizzes');
const allQuizzesCollection = new Collection('quizzes');
const settingsDoc = new Document('data/settings');

export {
  firebase,
  quizzesCollection,
  allQuizzesCollection,
  settingsDoc
};
