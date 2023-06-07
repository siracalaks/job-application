// import { initializeApp } from "firebase/app";
import { initializeApp }  from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGfbVHoE1Lo6MvA6bP6ht2JSV5xYUw_pY",
  authDomain: "job-app-7b375.firebaseapp.com",
  projectId: "job-app-7b375",
  storageBucket: "job-app-7b375.appspot.com",
  messagingSenderId: "1030350671896",
  appId: "1:1030350671896:web:c404dffd6d063eda47336d"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const firestore = getFirestore(firebase);

export { firebase, firestore };
