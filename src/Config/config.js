import { initializeApp } from "@firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBGfd1a-BABZroIjmoAGGDydvFF7lRrEgc",
  authDomain: "joke-f9630.firebaseapp.com",
  databaseURL: "https://joke-f9630-default-rtdb.firebaseio.com",
  projectId: "joke-f9630",
  storageBucket: "joke-f9630.appspot.com",
  messagingSenderId: "781652694458",
  appId: "1:781652694458:web:2726676141461847b27983",
};

export const firebaseApp = initializeApp(firebaseConfig);
