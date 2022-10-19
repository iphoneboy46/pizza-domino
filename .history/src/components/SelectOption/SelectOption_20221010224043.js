import React, { useContext, useEffect, useState } from "react";
import Select from "react-select";
import Context from "../Store/Context";

function SelectOption() {
  const {
    HCM,
    HN,
    BD,
    DN,
    HP,
    optionTP,
    optionQHCM,
    optionBD,
    optionDN,
    optionHP,
    optionQHN,
  } = useContext(Context);

  const [optionQ, setOptions] = useState("null");
  const [itemHCM, setItemHCM] = useState(HCM);
  const [itemHN, setItemHN] = useState(HN);
  const [itemBD, setItemBD] = useState(BD);
  const [itemDN, setItemDN] = useState(DN);



  const handleChangeTPHCM = (value) => {
    console.log(value);
    switch (value) {
      case "null":
        setItemHCM(HCM);
        break;
      case "BC":
        const bc = HCM.filter((hcm) => {
          return hcm.value === value;
        });
        setItemHCM(bc);
        break;
      case "BTN":
        const btn = HCM.filter((hcm) => {
          return hcm.value === value;
        });
        setItemHCM(btn);
        break;
      case "BTH":
        const bth = HCM.filter((hcm) => {
          return hcm.value === value;
        });
        setItemHCM(bth);
        break;
      case "GV":
        const gv = HCM.filter((hcm) => {
          return hcm.value === value;
        });
        setItemHCM(gv);
        break;
      case "HM":
        const hm = HCM.filter((hcm) => {
          return hcm.value === value;
        });
        setItemHCM(hm);
        break;
      case "PN":
        const pn = HCM.filter((hcm) => {
          return hcm.value === value;
        });
        setItemHCM(pn);
        break;
      case "Q1":
        const q1 = HCM.filter((hcm) => {
          return hcm.value === value;
        });
        setItemHCM(q1);
        break;
      case "Q2":
        const q2 = HCM.filter((hcm) => {
          return hcm.value === value;
        });
        setItemHCM(q2);
        break;
      case "Q3":
        const q3 = HCM.filter((hcm) => {
          return hcm.value === value;
        });
        setItemHCM(q3);
        break;
      case "Q4":
        const q4 = HCM.filter((hcm) => {
          return hcm.value === value;
        });
        setItemHCM(q4);
        break;
      case "Q5":
        const q5 = HCM.filter((hcm) => {
          return hcm.value === value;
        });
        setItemHCM(q5);
        break;
      case "Q6":
        const q6 = HCM.filter((hcm) => {
          return hcm.value === value;
        });
        setItemHCM(q6);
        break;
      case "Q7":
        const q7 = HCM.filter((hcm) => {
          return hcm.value === value;
        });
        setItemHCM(q7);
        break;
      case "Q8":
        const q8 = HCM.filter((hcm) => {
          return hcm.value === value;
        });
        setItemHCM(q8);
        break;
      case "Q9":
        const q9 = HCM.filter((hcm) => {
          return hcm.value === value;
        });
        setItemHCM(q9);
        break;
      case "Q10":
        const q10 = HCM.filter((hcm) => {
          return hcm.value === value;
        });
        setItemHCM(q10);
        break;
      case "Q11":
        const q11 = HCM.filter((hcm) => {
          return hcm.value === value;
        });
        setItemHCM(q11);
        break;
      case "Q12":
        const q12 = HCM.filter((hcm) => {
          return hcm.value === value;
        });
        setItemHCM(q12);
        break;
      case "TB":
        const tb = HCM.filter((hcm) => {
          return hcm.value === value;
        });
        setItemHCM(tb);
        break;
      case "TP":
        const tp = HCM.filter((hcm) => {
          return hcm.value === value;
        });
        setItemHCM(tp);
        break;
      case "TD":
        const td = HCM.filter((hcm) => {
          return hcm.value === value;
        });
        setItemHCM(td);
        break;
      default:
        setItemHCM(HCM);
    }
  };

  const handleChangeHN = (value) => {
    console.log(value);
    switch (value) {
      case "null":
        setItemHN(HN);
        break;
      case "BD":
        const bd = HN.filter((hn) => {
          return hn.value === value;
        });
        setItemHN(bd);
        break;
      case "HK":
        const hk = HN.filter((hn) => {
          return hn.value === value;
        });
        setItemHN(hk);
        break;
      case "LB":
        const lb = HN.filter((hn) => {
          return hn.value === value;
        });
        setItemHN(lb);
        break;
      case "CG":
        const cg = HN.filter((hn) => {
          return hn.value === value;
        });
        setItemHN(cg);
        break;
      case "HBT":
        const hbt = HN.filter((hn) => {
          return hn.value === value;
        });
        setItemHN(hbt);
        break;
      case "HM":
        const hm = HN.filter((hn) => {
          return hn.value === value;
        });
        setItemHN(hm);
        break;
      case "BTL":
        const btl = HN.filter((hn) => {
          return hn.value === value;
        });
        setItemHN(btl);
        break;
      case "HD":
        const hd = HN.filter((hn) => {
          return hn.value === value;
        });
        setItemHN(hd);
        break;
      case "TL":
        const tl = HN.filter((hn) => {
          return hn.value === value;
        });
        setItemHN(tl);
        break;
      default:
        setItemHN(HN);
    }
  };

  const handleChangeBD = (value) => {
    console.log(value);
    switch (value) {
      case "null":
        setItemBD(BD);
        break;
      case "TDM":
        const tdm = BD.filter((bd) => {
          return bd.value === value;
        });
        setItemHN(tdm);
        break;
        const tl = HN.filter((hn) => {
          return hn.value === value;
        });
        setItemHN(tl);
        break;
      default:
        setItemBD(BD);
    }
  };

  console.log(itemHCM);

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
          <Select
            placeholder="Chọn Quận/Huyện"
            options={optionQHCM}
            onChange={(e) => {
              handleChangeTPHCM(e.value);
            }}
          />
        ) : (
          ""
        )}
        {optionQ === "2" ? (
          <Select
            placeholder="Chọn Quận/Huyện"
            options={optionQHN}
            onChange={(e) => {
              handleChangeHN(e.value);
            }}
          />
        ) : (
          ""
        )}
        {optionQ === "3" ? (
          <Select placeholder="Chọn Quận/Huyện" options={optionBD} onChange={(e) => {
              handleChangeBD(e.value);
            }} />
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
              ? itemHCM.map((hcm) => {
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
              ? itemHN.map((hn) => {
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
              ? itemBD.map((bd) => {
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
              ? itemDN.map((dn) => {
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
