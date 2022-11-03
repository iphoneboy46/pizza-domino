import React, { useState, useEffect, useContext } from "react";
import "./SearchAddress.css";
import { Link, useNavigate } from "react-router-dom";
import Context from "../Store/Context";

function SearchAddress() {
  const [activeBtn, setActiveBtn] = useState(1);
  const [delivery, setDelivery] = useState("/delivery");
  const {
    address,
    setAddress,
    inputRef,
    orderAddress,
    setTakeAway,
    setDeliver,
  } = useContext(Context);

  console.log(address);

  function handleActive1(index) {
    setDelivery("/delivery");
    setActiveBtn(index);
    setDeliver("Giao hàng tận nơi");
    setTakeAway("");
  }

  function handleActive2(index) {
    setDelivery("/away");
    setActiveBtn(index);
    setTakeAway("Đặt đến lấy");
    setDeliver("");
  }

  console.log(address);
  console.log(orderAddress);

  useEffect(() => {
    const btnAddress = document.querySelector(".btnSubAddress");
    const iconDelete = document.querySelector(".delete")

    if (address.length > 1) {
      btnAddress.style.pointerEvents = "all";
      btnAddress.style.backgroundColor = "#0078ae";
      btnAddress.style.opacity = "1";
    } else {
      btnAddress.style.pointerEvents = "none";
      btnAddress.style.backgroundColor = "#0078ae";
      btnAddress.style.opacity = "0.4";
    }
  });

  const navigate = useNavigate();

  const handleChangePage = () => {
    navigate(delivery);
  };

  return (
    <div id="address" className="search-address">
      <div className="w-[80%] m-auto flex justify-center items-center">
        <button
          className={
            activeBtn === 1
              ? "active mr-5 border-style:solid border-2 border-[#717273] py-[8px] lg:px-[32px] md:px-[32px] px-1 bg-wh1 text-white rounded-t-lg font-extrabold"
              : "mr-5 border-style:solid border-2 border-[#717273] py-[8px] lg:px-[32px] md:px-[32px] px-1 bg-wh1 text-white rounded-t-lg font-extrabold"
          }
          onClick={() => {
            handleActive1(1);
          }}
        >
          Giao hàng tận nơi
        </button>
        <button
          className={
            activeBtn === 2
              ? "active border-style:solid border-2 border-[#717273] py-[8px] lg:px-[32px] md:px-[32px] px-1 bg-wh1 text-white rounded-t-lg font-extrabold btn-dl"
              : "border-style:solid border-2 border-[#717273] py-[8px] lg:px-[32px] md:px-[32px] px-1 bg-wh1 text-white rounded-t-lg font-extrabold btn-dl"
          }
          onClick={() => {
            handleActive2(2);
          }}
        >
          Đặt đến lấy
        </button>
      </div>
      <div className="lg:w-[50%] md:w-[90%] m-auto border-style:solid border-2 border-[#717273] rounded p-2">
        <div className="bg-[#fdedef] flex justify-center p-[32px] rounded w-[100%] m-auto">
         <div className="relative lg:w-[80%] md:w-[80%]">
            <input
              type="text"
              value={address}
              className="py-[12px] px-[8px] w-[100%] outline-[#80bdff] text-[#495057] font-extrabold rounded-l-lg inputAddress "
              placeholder="Vui lòng nhập địa chỉ nhận hàng"
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              ref={inputRef}
            />
            <div className="delete absolute right-[10px] top-[10px] hidden">
              <i class="fa-solid fa-xmark text-2xl text-[#686868]"></i>
            </div>
         </div>
          <button
            onClick={handleChangePage}
            className="btnSubAddress bg-[#0078ae] opacity-[0.4] pointer-events-none py-[12px] px-[16px] text-white rounded-r-lg "
          >
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchAddress;
