import React, { useState, useEffect, useContext } from "react";
import "./SearchAddress.css";
import { Link, useNavigate } from "react-router-dom";
import Context from "../Store/Context";

function SearchAddress() {
  const [activeBtn, setActiveBtn] = useState(1);
  const [delivery, setDelivery] = useState("/delivery");
  const {
    handleAddress,
    address,
    setAddress,
    inputRef,
    setOrderAddress,
    orderAddress,
    takeAway,
    setTakeAway,
    deliver,
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
          <input
            type="text"
            value={address}
            className="py-[12px] px-[8px] lg:w-[80%] md:w-[80%] outline-[#80bdff] text-[#495057] font-extrabold rounded-l-lg inputAddress"
            placeholder="Vui lòng nhập địa chỉ nhận hàng"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            ref={inputRef}
          />
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
