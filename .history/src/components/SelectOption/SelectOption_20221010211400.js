import React, { useContext, useState } from "react";
import Select from "react-select";
import Context from "../Store/Context";

function SelectOption() {
  const [optionQ, setOptions] = useState("null");
  const { HCM, HN, BD, DN, HP,optionTP, optionQHCM,optionBD,optionDN,optionHP,optionQHN} = useContext(Context);

 

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
          <Select placeholder="Chọn Quận/Huyện" options={optionQHCM}  />
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
        <h1 className="font-bold mb-3">Danh sách cửa hàng</h1>
        <div>
          <ul className="h-[60vh] overflow-y-scroll mb-5">
            {optionQ === "1"
              ? HCM.map((hcm) => {
                  return (
                    <li className="w-[100%] flex justify-around border-[#DFDFDF] border-solid border-2 p-4 mb-3">
                      <div className="w-[10%]">
                        <i class="fa-solid fa-location-dot"></i>
                      </div>
                      <di className="w-[90%]">
                        <h1 className="font-bold">
                          {hcm.name}{" "}
                          <span className="font-bold text-[#85899F]">
                            cách (NaN km)
                          </span>
                        </h1>
                        <h1 className="font-semibold text-[#85899F]">
                          {hcm.time}
                        </h1>
                        <h1 className="font-semibold text-[#85899F]">
                          {hcm.address}
                        </h1>
                      </di>
                    </li>
                  );
                })
              : ""}
              {optionQ === "2"
              ? HN.map((hn) => {
                  return (
                    <li className="w-[100%] flex justify-around border-[#DFDFDF] border-solid border-2 p-4 mb-3">
                      <div className="w-[10%]">
                        <i class="fa-solid fa-location-dot"></i>
                      </div>
                      <di className="w-[90%]">
                        <h1 className="font-bold">
                          {hn.name}{" "}
                          <span className="font-bold text-[#85899F]">
                            cách (NaN km)
                          </span>
                        </h1>
                        <h1 className="font-semibold text-[#85899F]">
                          {hn.time}
                        </h1>
                        <h1 className="font-semibold text-[#85899F]">
                          {hn.address}
                        </h1>
                      </di>
                    </li>
                  );
                })
              : ""}
              {optionQ === "3"
              ? BD.map((bd) => {
                  return (
                    <li className="w-[100%] flex justify-around border-[#DFDFDF] border-solid border-2 p-4 mb-3">
                      <div className="w-[10%]">
                        <i class="fa-solid fa-location-dot"></i>
                      </div>
                      <di className="w-[90%]">
                        <h1 className="font-bold">
                          {bd.name}{" "}
                          <span className="font-bold text-[#85899F]">
                            cách (NaN km)
                          </span>
                        </h1>
                        <h1 className="font-semibold text-[#85899F]">
                          {bd.time}
                        </h1>
                        <h1 className="font-semibold text-[#85899F]">
                          {bd.address}
                        </h1>
                      </di>
                    </li>
                  );
                })
              : ""}
              {optionQ === "4"
              ? DN.map((dn) => {
                  return (
                    <li className="w-[100%] flex justify-around border-[#DFDFDF] border-solid border-2 p-4 mb-3">
                      <div className="w-[10%]">
                        <i class="fa-solid fa-location-dot"></i>
                      </div>
                      <di className="w-[90%]">
                        <h1 className="font-bold">
                          {dn.name}{" "}
                          <span className="font-bold text-[#85899F]">
                            cách (NaN km)
                          </span>
                        </h1>
                        <h1 className="font-semibold text-[#85899F]">
                          {dn.time}
                        </h1>
                        <h1 className="font-semibold text-[#85899F]">
                          {dn.address}
                        </h1>
                      </di>
                    </li>
                  );
                })
              : ""}
              {optionQ === "5"
              ? HP.map((hp) => {
                  return (
                    <li className="w-[100%] flex justify-around border-[#DFDFDF] border-solid border-2 p-4 mb-3">
                      <div className="w-[10%]">
                        <i class="fa-solid fa-location-dot"></i>
                      </div>
                      <di className="w-[90%]">
                        <h1 className="font-bold">
                          {hp.name}{" "}
                          <span className="font-bold text-[#85899F]">
                            cách (NaN km)
                          </span>
                        </h1>
                        <h1 className="font-semibold text-[#85899F]">
                          {hp.time}
                        </h1>
                        <h1 className="font-semibold text-[#85899F]">
                          {hp.address}
                        </h1>
                      </di>
                    </li>
                  );
                })
              : ""}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SelectOption;
