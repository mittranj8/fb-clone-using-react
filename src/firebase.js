// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAVDsR9u45UPwlYtgegsCCYt0ktOxmQSUo",
  authDomain: "fb-clone-react-5beba.firebaseapp.com",
  databaseURL: "https://fb-clone-react-5beba.firebaseio.com",
  projectId: "fb-clone-react-5beba",
  storageBucket: "fb-clone-react-5beba.appspot.com",
  messagingSenderId: "1069395834220",
  appId: "1:1069395834220:web:47993c7feb8d7b70702f49",
  measurementId: "G-V4NTL9ZBK0",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider(); // using google login service

export { auth, provider };
export default db;
