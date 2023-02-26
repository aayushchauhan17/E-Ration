import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBSioGxvPtiao84AnHHkH9dK3O-HcK6baQ",
  authDomain: "eration-714d6.firebaseapp.com",
  projectId: "eration-714d6",
  storageBucket: "eration-714d6.appspot.com",
  messagingSenderId: "341554698673",
  appId: "1:341554698673:web:a74a7189895ab750a98590",
  measurementId: "G-TJ0N4NGCXG",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
