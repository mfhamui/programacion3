import app from 'firebase/app';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAEY2V8FcjUXZUJA0_vYAu-wkT2NsjaGF8",
  authDomain: "clase-3-b73ae.firebaseapp.com",
  projectId: "clase-3-b73ae",
  storageBucket: "clase-3-b73ae.firebasestorage.app",
  messagingSenderId: "450832508909",
  appId: "1:450832508909:web:6059e4d04c6deac29129e4"
};


app.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const storage = app.storage();
export const db = app.firestore();