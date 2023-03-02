import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Login from "../Login/Login";

function Donhang() {
  const [number, setNumber] = useState("");
  useEffect(() => {
    const textAlert = document.querySelector(".text-Alert");
    const textAlert2 = document.querySelector(".text-Alert2");
    const textAlert3 = document.querySelector(".text-Alert3");
    const textAlert4 = document.querySelector(".text-Alert4");

    // const phoneNumber = Number(number);
    console.log(number);
    const checkValid = () => {
      if (number.trim() === "") {
        textAlert.style.display = "block";
      } else if (number.charAt(0) !== "0") {
        textAlert4.style.display = "block";

      } else if (isNaN(number) && number.length > 0) {
        textAlert2.style.display = "block";

      } else if (typeof number !== "a-z A-Z" && number.length > 0) {
        textAlert2.style.display = "none";

      } else if (isNaN(number) || number.length < 2 || number.length !== 10) {
      } else {
        textAlert.style.display = "none";
      }
    };
    checkValid();
  });

  return (
    <div className="w-[100%] bg-[#F2F4F8]">
      <div className="content"></div>
      <Login />
      <div className="flex items-center lg:w-[40%]  md:w-[90%] h-[80vh] justify-center m-auto">
        <div className="w-[30%] h-[50%] lg:block md:block hidden">
          <img
            className="w-[100%] h-[100%]"
            src="https://dominos.vn/img/stock-stracking.png"
            alt=""
          />
        </div>
        <div className="w-[80%] ">
          <h1 className="font-bold">
            Theo Dõi Đơn Hàng - Domino's Pizza Việt Nam
          </h1>
          <div className="flex justify-center rounded w-[100%] m-auto mt-5">
            <input
              type="text"
              className="input-Number py-[12px] px-[8px] lg:w-[100%] md:w-[100%] w-[100%] outline-[#80bdff] text-[#495057] font-extrabold rounded-l-lg  shadow-sm shadow-[#979797]"
              placeholder="Nhập số điện thoại của bạn"
              onChange={(e) => {
                setNumber(e.target.value);
              }}
            />
            <Link
              to="/thucdon"
              className="btnSubAddress bg-[#0078ae] py-[12px] px-[16px] text-white rounded-r-lg "
            >
              <i class="fa-solid fa-magnifying-glass"></i>
            </Link>
          </div>
          <div>
            <span className="text-Alert text-[#DC3545] font-bold  transition-all duration-75">
              Vui lòng nhập số điện thoại của bạn!
            </span>
            <span className="text-Alert2 text-[#DC3545] font-bold hidden transition-all duration-75">
              Số điện thoại phải là số
            </span>
            <span className="text-Alert3 text-[#DC3545] font-bold hidden transition-all duration-75">
              Độ dài số điện thoại hợp lệ là 10 số!
            </span>{" "}
            <span className="text-Alert4 text-[#DC3545] font-bold hidden transition-all duration-75">
            Số điện thoại bắt đầu phải là số 0
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Donhang;
