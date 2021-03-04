import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: 'AIzaSyD5kp8jhv7c9bzxVfyTTSSMZeMOZfLA3FU',
    authDomain: 'beetlejuice-3c5c3.firebaseapp.com',
    databaseURL: 'https://beetlejuice-3c5c3-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'beetlejuice-3c5c3',
    storageBucket: 'beetlejuice-3c5c3.appspot.com',
    messagingSenderId: '318496486787',
    appId: '1:318496486787:web:2ff0d4b838e7744f1cf2b6',
    measurementId: 'G-6CL8M845BD',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.database();
