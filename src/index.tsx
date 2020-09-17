import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';
 
// Initialize firebase realtime database
const firebaseConfig = {
  apiKey: "AIzaSyDNKjvFTmVhWvMJKf6wbVYwIO5_35cfzYw",
  authDomain: "loan-pal-7f2ab.firebaseapp.com",
  databaseURL: "https://loan-pal-7f2ab.firebaseio.com",
  projectId: "loan-pal-7f2ab",
  storageBucket: "loan-pal-7f2ab.appspot.com",
  messagingSenderId: "473824805041",
  appId: "1:473824805041:web:fa144eab5cbcd8fc3f2290",
  measurementId: "G-NHF1YE3DN6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
