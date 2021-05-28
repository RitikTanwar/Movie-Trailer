import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC33T5uFIizbf3GuEt7tvIub_8GCYeSAwo",
    authDomain: "movie-trailers-cefbd.firebaseapp.com",
    projectId: "movie-trailers-cefbd",
    storageBucket: "movie-trailers-cefbd.appspot.com",
    messagingSenderId: "1065307462654",
    appId: "1:1065307462654:web:f5e8c037d0e51b28cc3eaf",
    measurementId: "G-FY7YHB07R2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth }
export default db