import React from "react";
import Select from "react-select";

function SelectOption() {
  const options = [
    { value: "", label: "Chọn Tỉnh/Thành phố" },
    { value: "", label: "Hồ Chí Minh" },
    { value: "", label: "Hà Nội" },
    { value: "", label: " Bình Dương" },
    { value: "", label: "Hà Nội" },
    { value: "", label: "Hà Nội" },

  ];
  return (
    <div className="w-[20%] p-3">
      <Select options={options} />
    </div>
  );
}

export default SelectOption;
