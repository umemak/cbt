import firebase from 'firebase/app'
import 'firebase/auth' // If you need it
import 'firebase/firestore' // If you need it
import 'firebase/storage' // If you need it
import 'firebase/analytics' // If you need it

export const clientCredentials = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
}
let db
let auth
// Check that `window` is in scope for the analytics module!
if (!firebase.apps.length) {
  firebase.initializeApp(clientCredentials)
  // To enable analytics. https://firebase.google.com/docs/analytics/get-started
  if (typeof window !== 'undefined') firebase.analytics()
  auth = firebase.auth()
  auth.signInAnonymously().catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    // var errorMessage = error.message;

    // if (errorCode === 'auth/operation-not-allowed') {
    //   alert('You must enable Anonymous auth in the Firebase Console.');
    // } else {
    //   console.error(error);
    // }
  });
  db = firebase.firestore();
}

export default firebase

module.exports = { auth, db }
