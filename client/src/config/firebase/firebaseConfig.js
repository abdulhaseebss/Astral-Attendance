import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBvi_7T2RyKEoPta4CmHTyPcKF0v5QJO4I",
  authDomain: "astral-attendance.firebaseapp.com",
  projectId: "astral-attendance",
  storageBucket: "astral-attendance.appspot.com",
  messagingSenderId: "582950782643",
  appId: "1:582950782643:web:c3e6eb65f4dcd21e57d2c6",
  measurementId: "G-MMQLQPLBWP"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app