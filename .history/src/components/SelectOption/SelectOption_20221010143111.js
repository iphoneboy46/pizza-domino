import React, { useState } from "react";
import Select from "react-select";

function SelectOption() {
  const [optionQ,setOptions] = useState("");

  const optionTP = [
    { value: "null", label: "Chọn Tỉnh/Thành phố" },
    { value: "QHCM", label: "Hồ Chí Minh" },
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
    { value: "11", label: "Quận 5" },
    { value: "12", label: "Quận 6" },
    { value: "13", label: "Quận 7" },
    { value: "14", label: "Quận 8" },
    { value: "15", label: "Quận 9" },
    { value: "16", label: "Tân Bình" },
    { value: "10", label: "Tân Phú" },
    { value: "10", label: "Thủ Đức" },
  ];

  const optionQHN = [
    { value: "null", label: "Chọn Quận/Huyện" },
    { value: "1", label: "Quận Ba Đình" },
    { value: "2", label: "Quận Hoàn Kiếm" },
    { value: "3", label: "Quận Cầu Giấy " },
    { value: "4", label: " Quận Hai Bà Trưng" },
    { value: "5", label: "Quận Hoàng Mai" },
    { value: "6", label: "Quận Bắc Từ Liêm" },
    { value: "7", label: "Quận Hà Đông" },
    { value: "8", label: "Quận Từ Liêm" },
  ];

  const optionBD = [
    { value: "null", label: "Chọn Quận/Huyện" },
    { value: "1", label: "Thành phố Thủ Dầu Một" },
    
  ];

  const optionDN = [
    { value: "null", label: "Chọn Quận/Huyện" },
    { value: "1", label: "Thành phố Thủ Dầu Một" },
  ];


  let option = `option${optionQ}`
  console.log(option);


  return (
    <div className="w-[20%] p-3 bg-white">
      <Select placeholder="Chọn Tỉnh/Thành phố" onChange={(e)=>{
        setOptions(e.value)
      }} options={optionTP} />
      <Select placeholder="Chọn Quận/Huyện" options={optionQHCM} />
    </div>
  );
}

export default SelectOption;
