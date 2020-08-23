import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyBcUSrwahR6FsKe6zxPt59P03XtIYGUEcg",
    authDomain: "chatty-g.firebaseapp.com",
    databaseURL: "https://chatty-g.firebaseio.com",
    projectId: "chatty-g",
    storageBucket: "chatty-g.appspot.com",
    messagingSenderId: "639171087831",
    appId: "1:639171087831:web:1a995219ed7461a5f44f92",
    measurementId: "G-4RBQPFN9CF"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth , provider};
export default db;