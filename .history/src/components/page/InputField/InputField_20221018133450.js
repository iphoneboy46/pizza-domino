import React from "react";

function InputField() {
  return (
    <div className="flex flex-col mb-5">
      <h1 className="text-[#0F80B3] mb-3 font-bold" htmlFor="email">
        Email
      </h1>
      <input
        className="email w-[100%] border-[#CED4DA] border-[1px] px-2 py-2 rounded"
        type="email"
        placeholder="Enter email"
        name="email"
        id="email"
      />
    </div>
  );
}

export default InputField;
