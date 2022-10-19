import React from "react";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";


function Login() {
  return (
    <div className="login-form flex w-[50%] absolute top-[50%] left-[50%] bg-white">
      <div className="w-[50%] h-[20%]">
        <img
          className="w-[100%] h-[100%]"
          src="https://dominos.vn/img/bg/modal-signin-signup.png"
          alt=""
        />
      </div>
      <div>
        <div className="flex">
          <span className="text-[#BCC1CB] font-bold">Đăng nhập</span>
          <span className="text-[#BCC1CB] font-bold">Tạo tài khoản</span>
        </div>
        <SignIn />
        <SignUp />
      </div>
    </div>
  );
}

export default Login;
