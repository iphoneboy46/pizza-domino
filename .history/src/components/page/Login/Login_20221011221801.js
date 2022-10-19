import React from "react";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";


function Login() {
  return (
    <div className="login-form flex w-[50%] justify-between items-center absolute top-[calc(100vh-50vh)] left-[50%] bg-white -translate-y-[50%] -translate-x-[50%]">
      <div className="w-[50%] h-[250px]">
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
