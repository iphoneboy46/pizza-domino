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
    { value: "1", label: "Bình Chánh" },
    { value: "2", label: "Bình Tân" },
    { value: "3", label: " Bình Thạnh" },
    { value: "4", label: " Gò Vấp" },
    { value: "5", label: "Hóc Môn" },
    { value: "6", label: "Phú Nhuận" },
    { value: "7", label: "Quận 1" },
    { value: "8", label: "Quận 2" },
    { value: "9", label: "Quận 3" },
    { value: "10", label: "Quận 4" },

  ];
  return (
    <div className="w-[20%] p-3 bg-white">
      <Select placeholder="Chọn Tỉnh/Thành phố" options={optionTP} />
      <Select placeholder="Chọn Quận/Huyện" options={optionTP} />
    </div>
  );
}

export default SelectOption;
