import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC6xwQGPiVKYHILhKRIKnCqf_AowTE9HLo",
    authDomain: "ecommerce-react-b02c5.firebaseapp.com",
    databaseURL: "https://ecommerce-react-b02c5.firebaseio.com",
    projectId: "ecommerce-react-b02c5",
    storageBucket: "ecommerce-react-b02c5.appspot.com",
    messagingSenderId: "545216107103",
    appId: "1:545216107103:web:d6f2ad712ccd935f65c1ea",
    measurementId: "G-Q0EXV33MLV"
  };


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  export default firebase;