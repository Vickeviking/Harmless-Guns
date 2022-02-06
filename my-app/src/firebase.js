import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCbNul3Nw7XZVf6_uT2EahmUFlPJ6DJvLU",
  authDomain: "harmless-guns.firebaseapp.com",
  projectId: "harmless-guns",
  storageBucket: "harmless-guns.appspot.com",
  messagingSenderId: "440710728720",
  appId: "1:440710728720:web:cdce5a0a535c3ee83b0e95",
  measurementId: "G-YRZYWHWDY7"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };