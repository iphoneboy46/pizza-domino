import React from "react";
import SignIn from "../SignIn/SignIn"
import SignUp from "../SignUp/SignUp"


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
    <div className="login-form flex ">
      <div className="w-[50%] h-[20%]">
        <img className="w-[100%] h-[100%]" src="https://dominos.vn/img/bg/modal-signin-signup.png" alt="" />
      </div>
      <div>
        <div className="flex">
            <span className="text-[#BCC1CB] font-bold">Đăng nhập</span>
            <span className="text-[#BCC1CB] font-bold">Tạo tài khoản</span>
        </div>
      <div> <SignIn/></div>
        <SignUp>
      </div>
    </div>
  );
}

export default Login;
