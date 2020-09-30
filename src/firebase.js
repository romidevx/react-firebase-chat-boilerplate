
import firebase from 'firebase';

const fb = firebase.initializeApp({
    apiKey: "AIzaSyAupAoxy3FTDAsSERlIaxMkeXzS2zsNG9o",
    authDomain: "todo-app-firebase-db188.firebaseapp.com",
    databaseURL: "https://todo-app-firebase-db188.firebaseio.com",
    projectId: "todo-app-firebase-db188",
    storageBucket: "todo-app-firebase-db188.appspot.com",
    messagingSenderId: "170681073507",
    appId: "1:170681073507:web:271633bec9236af6b45d56",
    measurementId: "G-29X2PY22TH"
});

const db = fb.firestore();

export default db;