// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLAVnwqk9S_6oJtM7sUJ5qFkxw5Mbd3Jo",
  authDomain: "mpsumy-9b86c.firebaseapp.com",
  projectId: "mpsumy-9b86c",
  storageBucket: "mpsumy-9b86c.appspot.com",
  messagingSenderId: "295322486794",
  appId: "1:295322486794:web:07cf79ece8c1e4467537f3",
  measurementId: "G-N0S5JEKDW0"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { app,analytics,db,auth,provider};