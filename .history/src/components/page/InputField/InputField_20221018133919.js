import React from "react";

function InputField(props) {
  const { field, form, type, label, placeholder, disabled } = props;

  const { name, value, onChange, onBlur } = field;
  return (
    <div className="flex flex-col mb-5">
      {label && (
        <label className="text-[#0F80B3] mb-3 font-bold" htmlFor={name}>
          {label}
        </label>
      )}
      <input
        className="email w-[100%] border-[#CED4DA] border-[1px] px-2 py-2 rounded"
        type="email"
        placeholder="Enter email"
        name={name}
        id={name}
      />
    </div>
  );
}

export default InputField;
