import React from "react";

function SignIn() {
  return (
    <div className="mt-[30px] pr-[50px]">
      <div className="flex flex-col">
        <label htmlFor="email">Email</label>
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
