
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import {getStorage } from "firebase/storage" 


const firebaseConfig = { 
   apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-c29c2.firebaseapp.com",
  projectId: "reactchat-c29c2",
  storageBucket: "reactchat-c29c2.appspot.com",
  messagingSenderId: "935701048044",
  appId: "1:935701048044:web:ddd9916a12a4b4962c13c9"
};


const app = initializeApp(firebaseConfig);

export const auth=getAuth()
export const db=getFirestore()
export const storage=getStorage()