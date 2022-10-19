import React from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3Z1DxTD8oa_PUx6aUeio6E0f7CPRb07Q",
  authDomain: "pizza-domino.firebaseapp.com",
  projectId: "pizza-domino",
  storageBucket: "pizza-domino.appspot.com",
  messagingSenderId: "48214603801",
  appId: "1:48214603801:web:54b6b7933e4d08e6745288",
  measurementId: "G-JY0VPMGF5N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function Login() {
  return (
    <div>
      <div>
        <label htmlFor="">Email</label>
        <input type="text" placeholder="Enter email" name="email" id="email" />
      </div>
      <div>
        <label htmlFor="">Password</label>
        <input type="text" placeholder="Enter password" name="password" id="password" />
      </div>
    </div>
  );
}

export default Login;
