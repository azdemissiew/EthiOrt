import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config ={
    apiKey: "AIzaSyArIkD46-6fiP0Mgb5tdtXvqcIftCRdLwU",
    authDomain: "crwn-db-f7798.firebaseapp.com",
    databaseURL: "https://crwn-db-f7798.firebaseio.com",
    projectId: "crwn-db-f7798",
    storageBucket: "crwn-db-f7798.appspot.com",
    messagingSenderId: "146333802775",
    appId: "1:146333802775:web:41acd07c07a195feb25752",
    measurementId: "G-GX3J2E7MRJ"
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