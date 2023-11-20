// firebase.js
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDRtI8hKT54naSe867u_b-TXksm4eb2M6w",
    authDomain: "loginpage-35545.firebaseapp.com",  
    projectId: "loginpage-35545",
    storageBucket: "loginpage-35545.appspot.com",
    messagingSenderId: "1032665012338",
    appId: "1:1032665012338:web:1218f63b1fbd6fae98caeb",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();

export { auth };
