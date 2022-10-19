import React from "react";

function SignIn() {
  return (
    <div className="mt-[30px] px-[40px] z-[99999]">
      <div className="flex flex-col mb-5">
        <label className="text-[#0F80B3] mb-3 font-bold" htmlFor="email">
          Email
        </label>
        <input
          className="w-[100%] border-[#CED4DA] border-2 px-2 py-2 rounded"
          type="email"
          placeholder="Enter email"
          name="email"
          id="email"
        />
      </div>
      <div className="flex flex-col mb-5">
        <label className="text-[#0F80B3] mb-3 font-bold" htmlFor="password">
          Password
        </label>
        <input
          className="w-[100%] border-[#CED4DA] border-2 px-2 py-2 rounded"
          type="text"
          placeholder="Enter password"
          name="password"
          id="password"
        />
      </div>
      <div>
        <button className="w-[100%] bg-[#E31837] py2">Đăng nhâp</button>
      </div>
    </div>
  );
}

export default SignIn;
