import React from "react";
import Select from "react-select";

function SelectOption() {
  const options = [
    { value: "", label: "Chọn Tỉnh/Thành phố" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <div className="w-[20%] p-3">
      <Select options={options} />
    </div>
  );
}

export default SelectOption;
