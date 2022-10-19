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
      takeAway : takeAway,
      deliver : deliver,
    });
  }
  console.log(address);
  console.log(orderAddress);

  return (
    <div id="address" className="search-address">
      <div className="w-[694px] m-auto flex justify-center items-center">
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
              ? "active border-style:solid border-2 border-[#717273] py-[8px] px-[32px] bg-wh1 text-white rounded-t-lg font-extrabold btn-dl"
              : "border-style:solid border-2 border-[#717273] py-[8px] px-[32px] bg-wh1 text-white rounded-t-lg font-extrabold btn-dl"
          }
          onClick={() => {
            handleActive2(2);
          }}
        >
          Đặt đến lấy
        </button>
      </div>
      <div className="w-[744px] m-auto border-style:solid border-2 border-[#717273] rounded p-2">
        <div className="bg-[#fdedef] p-[32px] rounded">
          <input
            type="text"
            className="py-[12px] px-[8px] w-[563px] outline-[#80bdff] text-[#495057] font-extrabold rounded-l-lg"
            placeholder="Vui lòng nhập địa chỉ nhận hàng"
            onChange={(e) => {
              if(onblur){
                console.log(123)
                setAddress(address)
              }else{
                setAddress("")
              }
            }}
            ref={inputRef}
          />
          <Link to="/thucdon">
            <button
              onClick={handleAddress}
              className="bg-[#0078ae] py-[12px] px-[16px] text-white rounded-r-lg"
            >
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SearchAddress;
