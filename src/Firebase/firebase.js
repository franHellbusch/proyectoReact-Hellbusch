import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBy8vm6kP7y_TbFKSy6MaQEZZCXrDfU3nw",
  authDomain: "tiendaonline-react-34a28.firebaseapp.com",
  projectId: "tiendaonline-react-34a28",
  storageBucket: "tiendaonline-react-34a28.appspot.com",
  messagingSenderId: "241286571013",
  appId: "1:241286571013:web:dc32d90c6f53a77e4aa86c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);