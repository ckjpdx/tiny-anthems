import React from 'react';
import ReactDOM from 'react-dom';
import './components/styles/all.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter } from 'react-router-dom';
import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAr_m0Ar7TDvDLwf8iJYpg_m56WAutH0Dc",
  authDomain: "tiny-anthems-20542.firebaseapp.com",
  databaseURL: "https://tiny-anthems-20542.firebaseio.com",
  projectId: "tiny-anthems-20542",
  storageBucket: "tiny-anthems-20542.appspot.com",
  messagingSenderId: "428612547407"
};
firebase.initializeApp(config);

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);

registerServiceWorker();
