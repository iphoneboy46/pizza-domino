import React from "react";

function SignIn() {
  return (
    <div className="mt-[30px]">
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" placeholder="Enter email" name="email" id="email" />
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
