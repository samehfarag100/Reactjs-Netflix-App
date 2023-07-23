import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth'
import 'firebase/compat/storage'
const firebaseConfig = {
  apiKey: "AIzaSyD3cqUCP_dl-d3P-47K3ZaZhppEowSAoDA",
  authDomain: "new-netflix-trailer-app.firebaseapp.com",
  projectId: "new-netflix-trailer-app",
  storageBucket: "new-netflix-trailer-app.appspot.com",
  messagingSenderId: "265159086940",
  appId: "1:265159086940:web:9fa39bb3bfcbfcaf95e799"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth()

export {auth}