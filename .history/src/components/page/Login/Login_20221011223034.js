import React from "react";
import "./Login.css";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";


function Login() {
  return (
    <div className="login-form flex w-[40%] justify-between absolute top-[calc(100vh-50vh)] left-[50%] bg-white -translate-y-[50%] -translate-x-[50%] ">
      <div className="w-[50%] h-[350px]">
        <img
          className="w-[80%] h-[100%]"
          src="https://dominos.vn/img/bg/modal-signin-signup.png"
          alt=""
        />
      </div>
      <div className="py-[30px] w-[50%]">
        <div className="flex justify-evenly">
          <span className="sign-in w-[100px] text-[#BCC1CB] text-center font-bold activeBtn">Đăng nhập</span>
          <span className="sign-up w-[100px] text-center text-[#BCC1CB] font-bold ">Tạo tài khoản</span>
        </div>
        {/* <SignIn />
        <SignUp /> */}
      </div>
    </div>
  );
}

export default Login;
