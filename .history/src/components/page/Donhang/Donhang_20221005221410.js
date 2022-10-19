import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Donhang() {
  useEffect(() => {
    const textAlert = document.querySelector(".text-Alert");
    const inputNumber = document.querySelector(".input-number");
    const checkValid = () => {
      if (Length === 0) {
        textAlert.style.visibility = "visible";
      }else{
        console.log(123);
        textAlert.style.visibility = "hidden";
      }
    };
    checkValid();
  });

  return (
    <div className="flex items-center w-[40%] h-[80vh] justify-center m-auto">
      <div className="w-[30%] h-[50%]">
        <img
          className="w-[100%] h-[100%]"
          src="https://dominos.vn/img/stock-stracking.png"
          alt=""
        />
      </div>
      <div className="w-[80%]">
        <h1 className="font-bold">
          Theo Dõi Đơn Hàng - Domino's Pizza Việt Nam
        </h1>
        <div className="bg-[white] flex justify-center rounded w-[100%] m-auto mt-5">
          <input
            type="text"
            className="input-Number py-[12px] px-[8px] lg:w-[100%] md:w-[80%] outline-[#80bdff] text-[#495057] font-extrabold rounded-l-lg  shadow-sm shadow-[#979797]"
            minLength="0"
            placeholder="Nhập số điện thoại của bạn"
            onChange={(e) => {}}
          />
          <Link
            to="/thucdon"
            className="btnSubAddress bg-[#0078ae] py-[12px] px-[16px] text-white rounded-r-lg "
          >
            <i class="fa-solid fa-magnifying-glass"></i>
          </Link>
        </div>
        <span className="text-Alert text-[#DC3545] font-bold invisible transition-all duration-75">
          Vui lòng nhập số điện thoại của bạn!
        </span>
      </div>
    </div>
  );
}

export default Donhang;
