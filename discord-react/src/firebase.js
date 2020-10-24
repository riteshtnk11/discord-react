import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyATL0OEsRbOONVYwbX__19Mn0I1e8gQ11w",
    authDomain: "discord-react-3619b.firebaseapp.com",
    databaseURL: "https://discord-react-3619b.firebaseio.com",
    projectId: "discord-react-3619b",
    storageBucket: "discord-react-3619b.appspot.com",
    messagingSenderId: "261632426916",
    appId: "1:261632426916:web:48947bfaa003d15e29b731",
    measurementId: "G-RXJQQMV4HY"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db ;