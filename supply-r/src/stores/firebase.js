
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAlp3sEKKaBzEtYjNnwN3Os40shStLL7g8",
  authDomain: "supply-r-e1ec8.firebaseapp.com",
  projectId: "supply-r-e1ec8",
  storageBucket: "supply-r-e1ec8.appspot.com",
  messagingSenderId: "143829675362",
  appId: "1:143829675362:web:c4fdb229bd7079d136903b",
  measurementId: "G-YTWLLEECVY"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth()
export const google = new GoogleAuthProvider()
export const facebook = new FacebookAuthProvider()
export const twitter = new TwitterAuthProvider()