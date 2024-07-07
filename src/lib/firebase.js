import firebase from "firebase/compat/app"; // Import from compat/app

import "firebase/compat/auth"; // Import compat/auth for authentication
import "firebase/compat/firestore"; // Import compat/firestore for Firestore
import "firebase/compat/storage"; // Import compat/storage for storage


const firebaseConfig = { 
   apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-c29c2.firebaseapp.com",
  projectId: "reactchat-c29c2",
  storageBucket: "reactchat-c29c2.appspot.com",
  messagingSenderId: "935701048044",
  appId: "1:935701048044:web:ddd9916a12a4b4962c13c9"
};


const app = firebase.initializeApp(firebaseConfig);

export const auth=firebase.auth()
export const db=firebase.firestore()
export const storage=firebase.storage()