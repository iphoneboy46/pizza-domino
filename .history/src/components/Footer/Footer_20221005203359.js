import React from "react";
import Logo2 from "../../assets/images/logo2.png";
import Credentials from "../../assets/images/credentials.png";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

function Footer() {
  return (
    <div className="bg-[#00628f] h-[50%] py-5">
      <div className="lg:w-[55%] md:w-[100%] w-[100%] m-auto pt-5">
        <div className="lg:flex md:flex hidden justify-end border-style:solid border-b-[1px] border-[#004666] mb-4">
          <div className="flex justify-between items-center p-1">
            <h2 className="text-white font-extrabold">
              Kết nối Domino's Pizza Việt Nam:
            </h2>
            <div className="text-white ml-5 mr-9 text-xl">
              <a href="https://www.facebook.com/DominosPizzaVietnam/?brand_redir=207571100452">
                {" "}
                <i class="fa-brands fa-facebook-f"></i>
              </a>
            </div>
            <div className="text-white text-xl">
              <a href="https://www.instagram.com/dominospizza_vietnam/">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="lg:flex lg:items-center lg:justify-between md:flex md:justify-around md:items-center md:mx-5 h">
          <div className="lg:block md:block flex flex-col items-center justify-center ">
            <div className="flex-1 h-[120px] py-[24px] pr-[24px] pl-0 flex items-center mr-10">
              <img
                className="w-[72px] h-[72px] mr-8 lg:block md:block hidden"
                src={Logo2}
                alt="domino pizza"
              />
              <div className="border-style: solid lg:border-l-[1px] md:border-l-[1px] border-l-0 border-[#004666] pl-8 lg:h-[100px] md:h-[100px] h-[70px] m-auto flex items-center justify-center flex-col">
                <p className="text-white text-[14px] font-semibold italic text-center pt-2">
                  <i class="fa-solid fa-phone"></i> Hotline Đặt Hàng
                </p>
                <a
                  className="text-yellowcustom text-[40px] font-extrabold "
                  href="tel:19006099"
                >
                  1900 6099
                </a>
              </div>
            </div>
            <div className="mt-2">
              <span className="text-[#0ca3ea] text-[12px] font-semibold text-center">
                © 2020 Domino’s Pizza Vietnam | Privacy Policy
              </span>
            </div>
          </div>
          <div className="lg:flex flex-1 justify-evenly items-start text-graycustom font-semibold md:hidden hidden">
            <div class="flex flex-col ">
              <Link className="hover:text-[#9199aa]" to="">
                Cam kết
              </Link>
              <Link className="py-[10px] hover:text-[#9199aa]" to="">
                Lịch sử
              </Link>
              <Link className="hover:text-[#9199aa]" to="">
                Tuyển dụng
              </Link>
            </div>
            <div class="flex flex-col">
              <Link className="hover:text-[#9199aa]" to="/Thucdon">
                Thực đơn
              </Link>
              <Link className="py-[10px] hover:text-[#9199aa]" to="/EVoucher">
                Mã e-voucher
              </Link>
              <Link className="hover:text-[#9199aa]" to="/Khuyenmai">
                Khuyến mãi
              </Link>
            </div>
            <div class="flex flex-col">
              <Link className="hover:text-[#9199aa]" to="/Donhang">
                Theo dõi đơn hàng
              </Link>
              <Link className="py-[10px] hover:text-[#9199aa]" to="">
                Danh sách cửa hàng
              </Link>
            </div>
          </div>
          <div class="lg:flex md:flex  hidden flex-0 justify-end">
            <img className="w-[175px] h-[37px]" src={Credentials} alt="" />
          </div>
        </div>
        {/* <div className="lg:flex md:flex flex items-center lg:justify-between justify-center md:justify-around ">
         
          <button className="lg:block md:block hidden bg-[#0078ae] py-2 px-5 text-white">
            <p className="font-extrabold">Switch to English version</p>
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default Footer;
