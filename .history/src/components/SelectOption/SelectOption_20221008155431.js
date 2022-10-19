import React from "react";
import Select from "react-select";

function SelectOption() {
  const options = [
    { value: "null", label: "Chọn Tỉnh/Thành phố" },
    { value: "6", label: "Hồ Chí Minh" },
    { value: "1", label: "Hà Nội" },
    { value: "2", label: " Bình Dương" },
    { value: "3", label: " Đồng Nai" },
    { value: "4", label: "Hải Phòng" },
  ];
  return (
    <div className="w-[20%] p-3 bg-white">
      <Select placeholder="Chọn Tỉnh/Thành phố" options={options} />
      <Select placeholder="Chọn Tỉnh/Thành phố" options={options} />
    </div>
  );
}

export default SelectOption;
