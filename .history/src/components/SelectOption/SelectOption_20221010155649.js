import React, { useContext, useState } from "react";
import Select from "react-select";
import Context from "../Store/Context";

function SelectOption() {
  const [optionQ, setOptions] = useState("null");
  const { HCM, HN, DB, DN, HP } = useContext(Context);

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
    { value: "BC", label: "Bình Chánh" },
    { value: "BTN", label: "Bình Tân" },
    { value: "BTH", label: " Bình Thạnh" },
    { value: "GV", label: " Gò Vấp" },
    { value: "HM", label: "Hóc Môn" },
    { value: "PN", label: "Phú Nhuận" },
    { value: "Q1", label: "Quận 1" },
    { value: "Q2", label: "Quận 2" },
    { value: "Q3", label: "Quận 3" },
    { value: "Q4", label: "Quận 4" },
    { value: "Q5", label: "Quận 5" },
    { value: "Q6", label: "Quận 6" },
    { value: "Q7", label: "Quận 7" },
    { value: "Q8", label: "Quận 8" },
    { value: "Q9", label: "Quận 9" },
    { value: "TB", label: "Tân Bình" },
    { value: "TP", label: "Tân Phú" },
    { value: "TD", label: "Thủ Đức" },
  ];

  const optionQHN = [
    { value: "null", label: "Chọn Quận/Huyện" },
    { value: "BD", label: "Quận Ba Đình" },
    { value: "HK", label: "Quận Hoàn Kiếm" },
    { value: "CG", label: "Quận Cầu Giấy " },
    { value: "HBT", label: " Quận Hai Bà Trưng" },
    { value: "HM", label: "Quận Hoàng Mai" },
    { value: "BTL", label: "Quận Bắc Từ Liêm" },
    { value: "HD", label: "Quận Hà Đông" },
    { value: "TL", label: "Quận Từ Liêm" },
  ];

  const optionBD = [
    { value: "null", label: "Chọn Quận/Huyện" },
    { value: "TDM", label: "Thành phố Thủ Dầu Một" },
  ];

  const optionDN = [
    { value: "null", label: "Chọn Quận/Huyện" },
    { value: "BH", label: "Thành phố Biên Hòa" },
  ];

  const optionHP = [
    { value: "null", label: "Chọn Quận/Huyện" },
    { value: "HB", label: "Quận Hồng Bàng" },
    { value: "NQ", label: "Quận Ngô Quyền" },
  ];

  return (
    <div className="w-[20%] p-3 bg-white">
      <Select
        placeholder="Chọn Tỉnh/Thành phố"
        onChange={(e) => {
          setOptions(e.value);
        }}
        className="mb-5"
        options={optionTP}
      />
      <div className="mb-5">
        {optionQ === "null" ? (
          <Select placeholder="Chọn Quận/Huyện" options={""} />
        ) : (
          ""
        )}
        {optionQ === "1" ? (
          <Select placeholder="Chọn Quận/Huyện" options={optionQHCM} />
        ) : (
          ""
        )}
        {optionQ === "2" ? (
          <Select placeholder="Chọn Quận/Huyện" options={optionQHN} />
        ) : (
          ""
        )}
        {optionQ === "3" ? (
          <Select placeholder="Chọn Quận/Huyện" options={optionBD} />
        ) : (
          ""
        )}
        {optionQ === "4" ? (
          <Select placeholder="Chọn Quận/Huyện" options={optionDN} />
        ) : (
          ""
        )}
        {optionQ === "5" ? (
          <Select placeholder="Chọn Quận/Huyện" options={optionHP} />
        ) : (
          ""
        )}
      </div>
      <div>
        <h1 className="font-bold">Danh sách cửa hàng</h1>
        <div>
          <ul>
            {HCM.map((hcm) => {
              return (
                <li className="w-[100%] flex justify-around border-[#DFDFDF] border-solid border-2 p-4 mb-3">
                  <div className="w-[10%]">
                    <i class="fa-solid fa-location-dot"></i>
                  </div>
                 <di className="w-[90%]">
                    <h1 className="font-bold">{hcm.name}</h1>
                    <h1 className="font-semibold text-[#85899F]">{hcm.time}</h1>
                    <h1 className="font-semibold text-[#85899F]">{hcm.address}</h1>
                 </di>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SelectOption;
