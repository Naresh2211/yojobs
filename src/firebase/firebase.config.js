import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCCcffw13_Pc9PSjNawzHqfxtVIj4MiIak",
  authDomain: "job-portal-537f1.firebaseapp.com",
  projectId: "job-portal-537f1",
  storageBucket: "job-portal-537f1.firebasestorage.app",
  messagingSenderId: "988258160004",
  appId: "1:988258160004:web:94ec28bb6bebda379c21d1",
  measurementId: "G-ZQTTEXN5NN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db= getFirestore(app);

export {db}