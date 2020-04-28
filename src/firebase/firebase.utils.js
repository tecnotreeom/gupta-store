import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD-7_grdCYCsVXna_FFpoomLKn2qIv0ppY",
    authDomain: "gupta-store-a95eb.firebaseapp.com",
    databaseURL: "https://gupta-store-a95eb.firebaseio.com",
    projectId: "gupta-store-a95eb",
    storageBucket: "gupta-store-a95eb.appspot.com",
    messagingSenderId: "258377220349",
    appId: "1:258377220349:web:ce4fba69611aefb5bafe94",
    measurementId: "G-0N16ZJZL17"
  };
  firebase.initializeApp(config);

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;