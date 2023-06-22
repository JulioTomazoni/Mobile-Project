// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7VHG2nGe3xZJzk75R4oQ-BsyorkqAlak",
  authDomain: "mobile-project-utfpr.firebaseapp.com",
  databaseURL: "https://mobile-project-utfpr-default-rtdb.firebaseio.com",
  projectId: "mobile-project-utfpr",
  storageBucket: "mobile-project-utfpr.appspot.com",
  messagingSenderId: "615079349366",
  appId: "1:615079349366:web:1d2c0a16eb02bb627fa357"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);

export const database = getDatabase(firebase);

export const refPatrimonio = ref(database, "Patrimonio/");

export const refSala = ref(database, "Sala/");

export const Authentication = getAuth(firebase)

