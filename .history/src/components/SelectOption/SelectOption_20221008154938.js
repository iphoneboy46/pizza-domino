import React from "react";
import Select from "react-select";

function SelectOption() {
  const options = [
    { value: "", label: "Hồ Chí Minh" },
    { value: "", label: "Hà Nội" },
    { value: "", label: " Bình Dương" },
    { value: "", label: " Đồng Nai" },
    { value: "", label: "Hải Phòng" },
  ];
  return (
    <div className="w-[20%] p-3 bg-white">
      <Select placeholder="Chọn Tỉnh/Thành phố" options={options} />
    </div>
  );
}

export default SelectOption;
