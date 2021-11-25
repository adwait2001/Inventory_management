import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDF0MzZA_9ZACZZpdKzHMPYJpqOFO7AuI8",
    authDomain: "inventory-management-d15ba.firebaseapp.com",
    projectId: "inventory-management-d15ba",
    storageBucket: "inventory-management-d15ba.appspot.com",
    messagingSenderId: "915413043830",
    appId: "1:915413043830:web:427e71d3ca17f63556ed57",
    measurementId: "G-BGBGNM4JX3"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth=firebaseApp.auth()
export default firebaseApp;