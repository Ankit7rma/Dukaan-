import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCABOaKWDBE2EF8kqUq9xRtLCmZWDw3pDk",
  authDomain: "dukaan-88cb7.firebaseapp.com",
  projectId: "dukaan-88cb7",
  storageBucket: "dukaan-88cb7.appspot.com",
  messagingSenderId: "265543540340",
  appId: "1:265543540340:web:ece9a95985367ce0e87b21",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export { fireDB, auth };
