import React from "react";

function SignIn() {
  return (
    <div className="mt-[30px] px-[50px]">
      <div className="flex flex-col">
        <label className="text-[#0F80B3]" htmlFor="email">Email</label>
        <input className='w-[100%]' type="text" placeholder="Enter email" name="email" id="email" />
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
