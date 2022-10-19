import React from "react";
import Select from "react-select";

function SelectOption() {
  const optionTP = [
    { value: "null", label: "Chọn Tỉnh/Thành phố" },
    { value: "1", label: "Hồ Chí Minh" },
    { value: "2", label: "Hà Nội" },
    { value: "3", label: " Bình Dương" },
    { value: "4", label: " Đồng Nai" },
    { value: "5", label: "Hải Phòng" },
  ];

  const optionQHCM = [
    { value: "null", label: "Chọn Quận/Huyện" },
    { value: "1", label: "Hồ Chí Minh" },
    { value: "2", label: "Hà Nội" },
    { value: "3", label: " Bình Dương" },
    { value: "4", label: " Đồng Nai" },
    { value: "5", label: "Hải Phòng" },
  ];
  return (
    <div className="w-[20%] p-3 bg-white">
      <Select placeholder="Chọn Tỉnh/Thành phố" options={optionTP} />
      <Select placeholder="" options={Chọn Quận/Huyện} />
    </div>
  );
}

export default SelectOption;
