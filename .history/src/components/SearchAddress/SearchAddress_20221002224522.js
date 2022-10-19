import React, { useState, useEffect, useContext } from "react";
import "./SearchAddress.css";
import { Link } from "react-router-dom";
import Context from "../Store/Context";

function SearchAddress() {
  const [activeBtn, setActiveBtn] = useState(1);
  const {
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
    setActiveBtn(index);
    setDeliver("Giao hàng tận nơi");
    setTakeAway("");
  }

  function handleActive2(index) {
    setActiveBtn(index);
    setTakeAway("Đặt đến lấy");
    setDeliver("");
  }

  function handleAddress() {
    setOrderAddress({
      address: address,
      takeAway: takeAway,
      deliver: deliver,
    });
  }

  console.log(address);
  console.log(orderAddress);

  return (
    <div id="address" className="search-address">
      <div className="w-[80%] m-auto flex justify-center items-center">
        <button
          className={
            activeBtn === 1
              ? "active mr-5 border-style:solid border-2 border-[#717273] py-[8px] px-[32px] bg-wh1 text-white rounded-t-lg font-extrabold"
              : "mr-5 border-style:solid border-2 border-[#717273] py-[8px] px-[32px] bg-wh1 text-white rounded-t-lg font-extrabold"
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
              ? "active border-style:solid border-2 border-[#717273] py-[8px] lg:px-[32px] md:px-[32px] sm:px-[100px] bg-wh1 text-white rounded-t-lg font-extrabold btn-dl"
              : "border-style:solid border-2 border-[#717273] py-[8px] px-[32px] bg-wh1 text-white rounded-t-lg font-extrabold btn-dl"
          }
          onClick={() => {
            handleActive2(2);
          }}
        >
          Đặt đến lấy
        </button>
      </div>
      <div className="lg:w-[60%] md:w-[80%] m-auto border-style:solid border-2 border-[#717273] rounded p-2">
        <div className="bg-[#fdedef] flex justify-center p-[32px] rounded w-[100%] m-auto">
          <input
            type="text"
            minLength="1"
            className="py-[12px] px-[8px] lg:w-[80%] md:w-[80%] outline-[#80bdff] text-[#495057] font-extrabold rounded-l-lg inputAddress "
            placeholder="Vui lòng nhập địa chỉ nhận hàng"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            ref={inputRef}
          />
          <Link
            to="/thucdon"
            onClick={handleAddress}
            className="bg-[#0078ae] opacity-[0.4] pointer-events-none py-[12px] px-[16px] text-white rounded-r-lg "
          >
            <i class="fa-solid fa-magnifying-glass"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SearchAddress;
