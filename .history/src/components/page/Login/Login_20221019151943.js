import React, { useState } from "react";
import "./Login.css";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";

function Login() {
  const [index, setIndex] = useState(1);

  const handleChooseFrom = (index) => {
    setIndex(index);
  };

  const handleEx = () => {
    const loginForm = document.querySelector(".login-form");
    const content = document.querySelector(".content");

    document.body.style.overflow = "auto";
    loginForm.style.top = "-100%";
    loginForm.style.opacity = "0";
    loginForm.style.transition = "all 0.5s linear";
    content.classList.remove("modal");
  };

  console.log(index);

  return (
    <div className="login-form flex lg:w-[45%] md:w-[90%] w-[100%] transition-all duration-500 linear rounded-md opacity justify-between items-center fixed -top-[100%] left-[50%] bg-white -translate-y-[50%] -translate-x-[50%] z-[99999]">
      <div className="login-success absolute left-[20%] bg-[red] w-[80%] z-1000 flex justify-center items-center flex-col">
        <h1 className="text-center font-bold">Đăng nhập thành công</h1>
        <button className="p-5">Ok</button>
      </div>
      <div
        onClick={handleEx}
        className="absolute top-[0px] bg-[#c0142f] p-2 px-4 text-2xl text-white right-0 rounded-tr-md"
      >
        <i class="fa-solid fa-xmark"></i>
      </div>
      <div className="w-[50%] h-[350px] lg:block md:block hidden">
        <img
          className="w-[80%] h-[100%]"
          src="https://dominos.vn/img/bg/modal-signin-signup.png"
          alt=""
        />
      </div>
      <div className="py-[30px] lg:w-[50%] md:w-[50%] w-[100%] mt-[15px]">
        <div className="flex justify-evenly">
          <span
            onClick={() => {
              handleChooseFrom(1);
            }}
            className={
              index === 1
                ? "sign-in w-[100px] text-[#BCC1CB] text-center font-semibold activeBtn"
                : "sign-in w-[100px] text-[#BCC1CB] text-center font-bold"
            }
          >
            Đăng nhập
          </span>
          <span
            onClick={() => {
              handleChooseFrom(2);
            }}
            className={
              index === 2
                ? "sign-in w-[100px] text-[#BCC1CB] text-center font-semibold activeBtn"
                : "sign-in w-[100px] text-[#BCC1CB] text-center font-bold"
            }
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
