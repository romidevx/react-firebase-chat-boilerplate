
import firebase from 'firebase';

const fb = firebase.initializeApp({
    "config-Details":"enter your firebase config data here"
});

const db = fb.firestore();

export default db;