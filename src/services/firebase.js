import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBqSRC4UPnbzhV0xMLK3P2aRLWceOYm754",
  authDomain: "matchmaking-efdaa.firebaseapp.com",
  projectId: "matchmaking-efdaa",
  storageBucket: "matchmaking-efdaa.appspot.com",
  messagingSenderId: "637126240893",
  appId: "1:637126240893:web:a9ad5436f1bbeb26799f14",
  measurementId: "G-V12TMSBFJ1"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

const userCollection = 'users';

export { app, firestore, storage, auth, userCollection }