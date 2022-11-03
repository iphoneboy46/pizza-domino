import React, { useContext, useEffect, useState } from "react";
import Select from "react-select";
import Context from "../Store/Context";
import "./SelectOption.css";

function SelectOption(props) {
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
    handleIP,
  } = useContext(Context);

  const [optionQ, setOptions] = useState("null");
  const [placeTP, setPlaceTP] = useState("Chọn Tỉnh/Thành phố");
  const [placeQ, setPlaceQ] = useState("Chọn Quận/Huyện");
  const [address2, setAddress2] = useState("");
  const [itemHCM, setItemHCM] = useState(HCM);
  const [itemHN, setItemHN] = useState(HN);
  const [itemBD, setItemBD] = useState(BD);
  const [itemDN, setItemDN] = useState(DN);
  const [itemHP, setItemHP] = useState(HP);
  const [activeItem, setActiveItem] = useState(0);

  const { address } = props;

  console.log(optionQ);

  console.log(address);

  console.log(address2);

  useEffect(() => {
    function checkAddress() {
      if (address.includes("Bình Tân") || address.includes("bình tân")) {
        setAddress2("Bình Tân");
      }

      if (address.includes("Bình Chánh") || address.includes("bình chánh")) {
        setAddress2("Bình Chánh");
      }

      if (address.includes("Bình Thạnh") || address.includes("bình thạnh")) {
        setAddress2("Bình Thạnh");
      }

      if (address.includes("Gò Vấp") || address.includes("gò vấp")) {
        setAddress2("Gò Vấp");
      }

      if (address.includes("Hóc Môn") || address.includes("hóc môn")) {
        setAddress2("Hóc Môn");
      }

      if (address.includes("Phú Nhuận") || address.includes("phú nhuận")) {
        setAddress2("Phú Nhuận");
      }

      if (address.includes("Quận 1") || address.includes("quận 1")) {
        setAddress2("Quận 1");
      }

      if (address.includes("Quận 2") || address.includes("quận 2")) {
        setAddress2("Quận 2");
      }

      if (address.includes("Quận 3") || address.includes("quận 3")) {
        setAddress2("Quận 3");
      }

      if (address.includes("Quận 4") || address.includes("quận 4")) {
        setAddress2("Quận 4");
      }

      if (address.includes("Quận 5") || address.includes("quận 5")) {
        setAddress2("Quận 5");
      }

      if (address.includes("Quận 6") || address.includes("quận 6")) {
        setAddress2("Quận 6");
      }

      if (address.includes("Quận 7") || address.includes("quận 7")) {
        setAddress2("Quận 7");
      }

      if (address.includes("Quận 8") || address.includes("quận 8")) {
        setAddress2("Quận 8");
      }

      if (address.includes("Quận 9") || address.includes("quận 9")) {
        setAddress2("Quận 9");
      }

      if (address.includes("Quận 10") || address.includes("quận 10")) {
        setAddress2("Quận 10");
      }

      if (address.includes("Quận 11") || address.includes("quận 11")) {
        setAddress2("Quận 11");
      }

      if (address.includes("Quận 12") || address.includes("quận 12")) {
        setAddress2("Quận 12");
      }

      if (address.includes("Tân Bình") || address.includes("tân bình")) {
        setAddress2("Tân Bình");
      }

      if (address.includes("Tân Phú") || address.includes("tân phú")) {
        setAddress2("Tân Phú");
      }

      if (address.includes("Thủ Đức") || address.includes("thủ đức")) {
        setAddress2("Thủ Đức");
      }

      if (address.includes("Ba Đình") || address.includes("ba đình")) {
        setAddress2("Ba Đình");
      }

      if (address.includes("Hoàn Kiếm") || address.includes("hoàn kiếm")) {
        setAddress2("Hoàn Kiếm");
      }

      if (address.includes("Cầu Giấy") || address.includes("cầu giấy")) {
        setAddress2("Cầu Giấy");
      }

      
      if (address.includes("Hai Bà Trưng") || address.includes("hai bà trưng")) {
        setAddress2("Hai Bà Trưng");
      }

      
      if (address.includes("Hoàng Mai") || address.includes("hoàng mai")) {
        setAddress2("Hoàng Mai");
      }

      
      if (address.includes("Bắc Từ Liêm") || address.includes("bắc từ liêm")) {
        setAddress2("Bắc Từ Liêm");
      }

      
      if (address.includes("Cầu Giấy") || address.includes("cầu giấy")) {
        setAddress2("Cầu Giấy");
      }
    }

    switch (address2) {
      case "null":
        break;
      case "Bình Chánh":
        setOptions("1");
        setPlaceTP("Hồ Chí Minh");
        setPlaceQ("Bình Chánh");
        const bc = HCM.filter((hcm) => {
          return hcm.value === "BC";
        });
        setItemHCM(bc);
        break;
      case "Bình Tân":
        setOptions("1");
        setPlaceTP("Hồ Chí Minh");
        setPlaceQ("Bình Tân");
        const btn = HCM.filter((hcm) => {
          return hcm.value === "BTN";
        });
        setItemHCM(btn);
        break;
      case "Bình Thạnh":
        setOptions("1");
        setPlaceTP("Hồ Chí Minh");
        setPlaceQ("Bình Thạnh");
        const bth = HCM.filter((hcm) => {
          return hcm.value === "BTH";
        });
        setItemHCM(bth);
        break;
      case "Gò Vấp":
        setOptions("1");
        setPlaceTP("Hồ Chí Minh");
        setPlaceQ("Gò Vấp");
        const gv = HCM.filter((hcm) => {
          return hcm.value === "GV";
        });
        setItemHCM(gv);
        break;
      case "Hóc Môn":
        setOptions("1");
        setPlaceTP("Hồ Chí Minh");
        setPlaceQ("Hóc Môn");
        const hm = HCM.filter((hcm) => {
          return hcm.value === "HM";
        });
        setItemHCM(hm);
        break;
      case "Phú Nhuận":
        setOptions("1");
        setPlaceTP("Hồ Chí Minh");
        setPlaceQ("Phú Nhuận");
        const pn = HCM.filter((hcm) => {
          return hcm.value === "PN";
        });
        setItemHCM(pn);
        break;
      case "Quận 1":
        setOptions("1");
        setPlaceTP("Hồ Chí Minh");
        setPlaceQ("Quận 1");
        const q1 = HCM.filter((hcm) => {
          return hcm.value === "Q1";
        });
        setItemHCM(q1);
        break;
      case "Quận 2":
        setOptions("1");
        setPlaceTP("Hồ Chí Minh");
        setPlaceQ("Quận 2");
        const q2 = HCM.filter((hcm) => {
          return hcm.value === "Q2";
        });
        setItemHCM(q2);
        break;
      case "Quận 3":
        setOptions("1");
        setPlaceTP("Hồ Chí Minh");
        setPlaceQ("Quận 3");
        const q3 = HCM.filter((hcm) => {
          return hcm.value === "Q3";
        });
        setItemHCM(q3);
        break;
      case "Quận 4":
        setOptions("1");
        setPlaceTP("Hồ Chí Minh");
        setPlaceQ("Quận 4");
        const q4 = HCM.filter((hcm) => {
          return hcm.value === "Q4";
        });
        setItemHCM(q4);
        break;
      case "Quận 5":
        setOptions("1");
        setPlaceTP("Hồ Chí Minh");
        setPlaceQ("Quận 5");
        const q5 = HCM.filter((hcm) => {
          return hcm.value === "Q5";
        });
        setItemHCM(q5);
        break;
      case "Quận 6 ":
        setOptions("1");
        setPlaceTP("Hồ Chí Minh");
        setPlaceQ("Quận 6");
        const q6 = HCM.filter((hcm) => {
          return hcm.value === "Q6";
        });
        setItemHCM(q6);
        break;
      case "Quận 7":
        setOptions("1");
        setPlaceTP("Hồ Chí Minh");
        setPlaceQ("Quận 7");
        const q7 = HCM.filter((hcm) => {
          return hcm.value === "Q7";
        });
        setItemHCM(q7);
        break;
      case "Quận 8":
        setOptions("1");
        setPlaceTP("Hồ Chí Minh");
        setPlaceQ("Quận 8");
        const q8 = HCM.filter((hcm) => {
          return hcm.value === "Q8";
        });
        setItemHCM(q8);
        break;
      case "Quận 9":
        setOptions("1");
        setPlaceTP("Hồ Chí Minh");
        setPlaceQ("Quận 9");
        const q9 = HCM.filter((hcm) => {
          return hcm.value === "Q9";
        });
        setItemHCM(q9);
        break;
      case "Quận 10":
        setOptions("1");
        setPlaceTP("Hồ Chí Minh");
        setPlaceQ("Quận 10");
        const q10 = HCM.filter((hcm) => {
          return hcm.value === "Q10";
        });
        setItemHCM(q10);
        break;
      case "Quận 11":
        setOptions("1");
        setPlaceTP("Hồ Chí Minh");
        setPlaceQ("Quận 11");
        const q11 = HCM.filter((hcm) => {
          return hcm.value === "Q11";
        });
        setItemHCM(q11);
        break;
      case "Quận 12":
        setOptions("1");
        setPlaceTP("Hồ Chí Minh");
        setPlaceQ("Quận 12");
        const q12 = HCM.filter((hcm) => {
          return hcm.value === "Q12";
        });
        setItemHCM(q12);
        break;
      case "Tân Bình":
        setOptions("1");
        setPlaceTP("Hồ Chí Minh");
        setPlaceQ("Tân Bình");
        const tb = HCM.filter((hcm) => {
          return hcm.value === "TB";
        });
        setItemHCM(tb);
        break;
      case "Tân Phú":
        setOptions("1");
        setPlaceTP("Hồ Chí Minh");
        setPlaceQ("Tân Phú");
        const tp = HCM.filter((hcm) => {
          return hcm.value === "TP";
        });
        setItemHCM(tp);
        break;
      case "Thủ Đức":
        setOptions("1");
        setPlaceTP("Hồ Chí Minh");
        setPlaceQ("Thủ Đức");
        const td = HCM.filter((hcm) => {
          return hcm.value === "TD";
        });
        setItemHCM(td);
        break;
      default:
        setItemHCM(HCM);
    }

    checkAddress();
  }, [address2]);

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

  const handleChangeDN = (value) => {
    console.log(value);
    switch (value) {
      case "null":
        setItemDN(DN);
        break;
      case "BH":
        const bh = DN.filter((dn) => {
          return dn.value === value;
        });
        setItemDN(bh);
        break;
      default:
        setItemBD(BD);
    }
  };

  const handleChangeHP = (value) => {
    console.log(value);
    switch (value) {
      case "null":
        setItemHP(HP);
        break;
      case "HB":
        const hb = HP.filter((hp) => {
          return hp.value === value;
        });
        setItemHP(hb);
        break;
      case "NQ":
        const nq = HP.filter((hp) => {
          return hp.value === value;
        });
        setItemHP(nq);
        break;
      default:
        setItemHP(HP);
    }
  };

  const handleActive = (index) => {
    setActiveItem(index);
  };
  console.log(activeItem);

  console.log(itemHCM);

  return (
    <div className="lg:w-[25%] md:w-[100%] w-[100%] p-10 bg-white">
      <Select
        placeholder={placeTP}
        onChange={(e) => {
          setOptions(e.value);
        }}
        className="mb-5"
        options={optionTP}
      />
      <div className="mb-5">
        {optionQ === "null" ? <Select placeholder={placeQ} options={""} /> : ""}
        {optionQ === "1" ? (
          <Select
            placeholder={placeQ}
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
            placeholder={placeQ}
            options={optionQHN}
            onChange={(e) => {
              handleChangeHN(e.value);
            }}
          />
        ) : (
          ""
        )}
        {optionQ === "3" ? (
          <Select
            placeholder={placeQ}
            options={optionBD}
            onChange={(e) => {
              handleChangeBD(e.value);
            }}
          />
        ) : (
          ""
        )}
        {optionQ === "4" ? (
          <Select
            placeholder={placeQ}
            options={optionDN}
            onChange={(e) => {
              handleChangeDN(e.value);
            }}
          />
        ) : (
          ""
        )}
        {optionQ === "5" ? (
          <Select
            placeholder={placeQ}
            options={optionHP}
            onChange={(e) => {
              handleChangeHP(e.value);
            }}
          />
        ) : (
          ""
        )}
      </div>
      <div className="cursor-pointer">
        <h1 className="font-bold mb-3">Danh sách cửa hàng</h1>
        <div>
          <ul className="h-[50vh] overflow-y-scroll mb-5">
            {optionQ === "1"
              ? itemHCM.map((hcm, index) => {
                  return (
                    <li
                      onClick={() => {
                        handleIP(hcm.ip);
                        handleActive(index);
                      }}
                      className={
                        activeItem === index
                          ? "w-[100%] flex justify-around border-[#DFDFDF] border-solid border-2 p-4 mb-3 activeBorder"
                          : "w-[100%] flex justify-around border-[#DFDFDF] border-solid border-2 p-4 mb-3"
                      }
                    >
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
              ? itemHN.map((hn, index) => {
                  return (
                    <li
                      onClick={() => {
                        handleIP(hn.ip);
                        handleActive(index);
                      }}
                      className={
                        activeItem === index
                          ? "w-[100%] flex justify-around border-[#DFDFDF] border-solid border-2 p-4 mb-3 activeBorder"
                          : "w-[100%] flex justify-around border-[#DFDFDF] border-solid border-2 p-4 mb-3"
                      }
                    >
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
              ? itemBD.map((bd, index) => {
                  return (
                    <li
                      onClick={() => {
                        handleIP(bd.ip);
                        handleActive(index);
                      }}
                      className={
                        activeItem === index
                          ? "w-[100%] flex justify-around border-[#DFDFDF] border-solid border-2 p-4 mb-3 activeBorder"
                          : "w-[100%] flex justify-around border-[#DFDFDF] border-solid border-2 p-4 mb-3"
                      }
                    >
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
              ? itemDN.map((dn, index) => {
                  return (
                    <li
                      onClick={() => {
                        handleIP(dn.ip);
                        handleActive(index);
                      }}
                      className={
                        activeItem === index
                          ? "w-[100%] flex justify-around border-[#DFDFDF] border-solid border-2 p-4 mb-3 activeBorder"
                          : "w-[100%] flex justify-around border-[#DFDFDF] border-solid border-2 p-4 mb-3"
                      }
                    >
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
              ? itemHP.map((hp, index) => {
                  return (
                    <li
                      onClick={() => {
                        handleIP(hp.ip);
                        handleActive(index);
                      }}
                      className={
                        activeItem === index
                          ? "w-[100%] flex justify-around border-[#DFDFDF] border-solid border-2 p-4 mb-3 activeBorder"
                          : "w-[100%] flex justify-around border-[#DFDFDF] border-solid border-2 p-4 mb-3"
                      }
                    >
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
