import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCbwYlYnSNMeGWQX6380BlHCD0oj1pQcPc",
    authDomain: "alex-crwn-db.firebaseapp.com",
    projectId: "alex-crwn-db",
    storageBucket: "alex-crwn-db.appspot.com",
    messagingSenderId: "960976906637",
    appId: "1:960976906637:web:c18c3ce773f4ece7b7f5c4",
    measurementId: "G-PY4MRD0SH4"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData,
            })
        } catch(error) {
            console.log('error', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt: 'select_account'});

export const singInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;