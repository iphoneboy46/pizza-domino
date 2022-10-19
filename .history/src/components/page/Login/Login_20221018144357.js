import React, { useState } from "react";
import "./Login.css";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";

function Login() {
  const [index, setIndex] = useState(1);

  const handleChooseFrom = (index) => {
    setIndex(index);
  };

  const handleEx = () =>{

  }

  console.log(index);

  return (
    <div className="login-form flex w-[40%] rounded-md justify-between items-center fixed -top-[100%] left-[50%] bg-white -translate-y-[50%] -translate-x-[50%] z-[99999]">
      <div onClick={handleEx} className="absolute top-[0px] bg-[#c0142f] p-2 px-4 text-2xl text-white right-0 rounded-tr-md mb-10">
        <i class="fa-solid fa-xmark"></i>
      </div>
      <div className="w-[50%] h-[350px]">
        <img
          className="w-[80%] h-[100%]"
          src="https://dominos.vn/img/bg/modal-signin-signup.png"
          alt=""
        />
      </div>
      <div className="py-[30px] w-[50%]">
        <div className="flex justify-evenly">
          <span
            onClick={() => {
              handleChooseFrom(1);
            }}
            className={index === 1 ? "sign-in w-[100px] text-[#BCC1CB] text-center font-semibold activeBtn" : "sign-in w-[100px] text-[#BCC1CB] text-center font-bold"}
          >
            Đăng nhập
          </span>
          <span
            onClick={() => {
              handleChooseFrom(2);
            }}
            className={index === 2 ? "sign-in w-[100px] text-[#BCC1CB] text-center font-semibold activeBtn" : "sign-in w-[100px] text-[#BCC1CB] text-center font-bold"}
          >
            Tạo tài khoản
          </span>
        </div>
        {index === 1 ? <SignIn /> : ""}
        {index === 2 ? <SignUp /> : ""}
      </div>
    </div>
  );
}

export default Login;
