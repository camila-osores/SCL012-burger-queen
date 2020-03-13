import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA3B0lDoj6yIatGVl5U8ctTQy7GPhjodW0",
    authDomain: "burgerqueen-47dd8.firebaseapp.com",
    databaseURL: "https://burgerqueen-47dd8.firebaseio.com",
    projectId: "burgerqueen-47dd8",
    storageBucket: "burgerqueen-47dd8.appspot.com",
    messagingSenderId: "796657366092",
    appId: "1:796657366092:web:e3a53f94d951117a81f0e9",
    measurementId: "G-NC64XSNHMS"
};

firebase.initializeApp(firebase);

let db = firebase.firestore();

export default db;