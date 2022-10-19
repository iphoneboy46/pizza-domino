import React from 'react';
import './Footer.css';
import Logo2 from '../../assets/images/logo2.png';
import Credentials from '../../assets/images/credentials.png';
import { Link } from 'react-router-dom';
import Button from '../Button/Button'




function Footer() {
  return (
    <div className="footer">
      <div className="w-[100%] m-auto pt-5">
        <div className="flex justify-end border-style:solid border-b-[1px] border-[#004666] mb-4">
          <div className="flex justify-between items-center p-1">
            <h2 className="text-white font-extrabold">Kết nối Domino's Pizza Việt Nam:</h2>
            <div className="text-white ml-5 mr-9 text-xl">
              <a href="https://www.facebook.com/DominosPizzaVietnam/?brand_redir=207571100452"> <i class="fa-brands fa-facebook-f"></i></a>
            </div>
            <div className="text-white text-xl">
              <a href="https://www.instagram.com/dominospizza_vietnam/"><i class="fa-brands fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex-1 h-[120px] py-[24px] pr-[24px] pl-0 flex items-center mr-10">
            <img className="w-[72px] h-[72px] mr-8" src={Logo2} alt="domino pizza" />
            <div className="border-style: solid border-l-[1px] border-[#004666] pl-8 h-[120px]">
              <p className="text-white text-[14px] font-semibold italic text-center pt-5"><i class="fa-solid fa-phone"></i> Hotline Đặt Hàng</p>
              <a className="text-yellowcustom text-[40px] font-extrabold " href="tel:19006099">1900 6099</a>
            </div>
          </div>
          <div className="flex flex-1 justify-around items-start text-graycustom font-semibold md:hidden md:justify-around">
            <div class="flex flex-col ">
              <Link className="hover:text-[#9199aa]" to="">Cam kết</Link>
              <Link className="py-[10px] hover:text-[#9199aa]" to="">Lịch sử</Link>
              <Link className="hover:text-[#9199aa]" to="">Tuyển dụng</Link>
            </div>
            <div class="flex flex-col">
              <Link className="hover:text-[#9199aa]" to="/Thucdon">Thực đơn</Link>
              <Link className="py-[10px] hover:text-[#9199aa]" to="/EVoucher">Mã e-voucher</Link>
              <Link className="hover:text-[#9199aa]" to="/Khuyenmai">Khuyến mãi</Link>
            </div>
            <div class="flex flex-col">
              <Link className="hover:text-[#9199aa]" to="/Donhang">Theo dõi đơn hàng</Link>
              <Link className="py-[10px] hover:text-[#9199aa]" to="">Danh sách cửa hàng</Link>
            </div>
          </div>
          <div class="flex flex-0 justify-end">
            <img className="w-[175px] h-[37px]" src={Credentials} alt="" />
          </div>
        </div>
        <div className="flex items-center justify-between md:justify-around">
          <span className="text-[#0ca3ea] text-[12px] font-semibold">© 2020 Domino’s Pizza Vietnam | Privacy Policy</span>
          <Button >
            <p className="font-extrabold">Switch to English version</p>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Footer