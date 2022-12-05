import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCDXufVKS65bA9V058D0z2hC_QOik5CmOU",
    authDomain: "clone-652fe.firebaseapp.com",
    databaseURL: "https://clone-652fe-default-rtdb.firebaseio.com",
    projectId: "clone-652fe",
    storageBucket: "clone-652fe.appspot.com",
    messagingSenderId: "542365259199",
    appId: "1:542365259199:web:9942ab51caaa84cda83d0a"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };

