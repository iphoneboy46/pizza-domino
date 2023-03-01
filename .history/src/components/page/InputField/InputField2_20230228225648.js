import React from "react";

function InputField2(props) {
  const { field, form, type, label, placeholder, disabled } = props;

  const { name, value, onChange, onBlur } = field;
  const {errors,touched} = form;
  const showError = errors[name] && touched[name]
  return (
    <div className="flex flex-col mb-5">
      {label && (
        <label className="text-[#0F80B3] mb-2 font-bold" htmlFor={name}>
          {label}
        </label>
      )}
      <input
        className="email w-[400px] border-[#CED4DA] border-[1px] px-2 py-2 rounded"
        type={type}
        onBlur={onBlur}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        id={name}
      />
    {showError && <p className="text-[red] font-bold text-sm">{errors[name]}</p>}
    </div>
  );
}

export default InputField2;
