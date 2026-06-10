// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7MA_qzHkJIPDUyqfhvIvn09svfdM7Qvo",
  authDomain: "proyectott-reactjs.firebaseapp.com",
  projectId: "proyectott-reactjs",
  storageBucket: "proyectott-reactjs.firebasestorage.app",
  messagingSenderId: "1018093389325",
  appId: "1:1018093389325:web:80fda69f6304f85c913744"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


/* -------------------------------------------------------------------------- */
/*              CREAR Y EXPORTAR VARIABLES PARA "GET" DE FILESTORE              */
/* -------------------------------------------------------------------------- */

const db = getFirestore(app);

//para cuando veamos el login
const auth = getAuth(app);

export { db, auth };