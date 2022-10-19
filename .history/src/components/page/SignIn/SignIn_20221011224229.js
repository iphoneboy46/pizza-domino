import React from "react";

function SignIn() {
  return (
    <div className="mt-[30px] px-[40px]">
      <div className="flex flex-col">
        <label className="text-[#0F80B3] mb-3 font-bold" htmlFor="email">Email</label>
        <input className='w-[100%] border-[#CED4DA] border-2 px-1 py-2 rounded' type="text" placeholder="Enter email" name="email" id="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="text"
          placeholder="Enter password"
          name="password"
          id="password"
        />
      </div>
    </div>
  );
}

export default SignIn;
