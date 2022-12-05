import Rebase from "re-base";
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCDXufVKS65bA9V058D0z2hC_QOik5CmOU",
  authDomain: "clone-652fe.firebaseapp.com",
  databaseURL: "https://clone-652fe-default-rtdb.firebaseio.com",
  projectId: "clone-652fe",
  storageBucket: "clone-652fe.appspot.com",
  messagingSenderId: "542365259199",
  appId: "1:542365259199:web:9942ab51caaa84cda83d0a"
});

const base = Rebase.createClass(firebaseApp.database())
const db= firebaseApp.firestore();
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { firebaseApp };
export { db, auth, provider }

export default base;
















{/*
const firebaseConfig = {
  apiKey: "AIzaSyCDXufVKS65bA9V058D0z2hC_QOik5CmOU",
  authDomain: "clone-652fe.firebaseapp.com",
  projectId: "clone-652fe",
  storageBucket: "clone-652fe.appspot.com",
  messagingSenderId: "542365259199",
  appId: "1:542365259199:web:5503b518bde2fb11a83d0a"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db= firebaseApp.firestore();
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()


export { db, auth, provider }
*/}