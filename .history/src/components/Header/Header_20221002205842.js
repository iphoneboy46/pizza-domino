import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import logo2 from "../../assets/images/logo2.png";
import Context from "../Store/Context";

const pages = [
  {
    name: "MÃ E-VOUCHER",
    to: "/EVoucher",
  },
  {
    name: "Khuyến mãi",
    to: "/Khuyenmai",
  },
  {
    name: "Thực đơn",
    to: "/Thucdon",
  },
  {
    name: "Theo dõi đơn hàng",
    to: "/Donhang",
  },
];

function Header() {
  const { totalQuantity } = useContext(Context);
  return (
    <div className="relative">
      <div className="bg-[#004666] lg:flex md:flex p-[16px] w-[100%] h-[80px] items-center justify-between fixed z-[2000] overflow-hidden hidden">
        <div className="lg:w-[300px] md:w-[200px] h-[100%] flex items-center">
          <Link to="/">
            <img className="w-[100%] h-[100%]" src={logo} alt="domino pizza" />
          </Link>
        </div>
        <div>
          <ul className="flex items-center">
            {pages.map((page, i) => {
              return (
                <>
                  <li
                    key={i}
                    className="text-sm text-white font-extrabold uppercase lg:ml-5 md:ml-1 h-[100%] pl-5 pr-5 pt-8 pb-8 tracking-widest hover:bg-[#00628f] hover:text-wh"
                  >
                    <Link className="pt-8 pb-8" to={page.to}>
                      {page.name}
                    </Link>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
        <div className="flex items-center">
          <div className="flex items-center mr-8">
            <img
              className="lg:w-[40px] md:w-[50px] h-[40px] md:h-[30px] mr-1"
              src="https://icons-for-free.com/download-icon-flag+nation+vietnam+icon-1320166242583052832_256.icns"
              alt="vn"
            />
            <img
              className="w-[40px] md:w-[50px] h-[40px] md:h-[30px]"
              src="https://vi.seaicons.com/wp-content/uploads/2017/04/United-Kingdom-Flag-1-icon.png"
              alt="en"
            />
          </div>
          <div className="flex items-center">
            <i class="fa-solid fa-user text-white text-4xl lg:mr-10 md:mr-2 md:text-2xl"></i>
            <div>
              <Link to="/cart">
                <i class="fa-solid fa-basket-shopping  relative text-white text-4xl lg:mr-4 md:mr-2 md:text-2xl"></i>
                <span className="bg-[#aa1934] absolute px-2 font-bold text-white right-4 top-4 rounded">
                  {totalQuantity ? totalQuantity : 0}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] bg-[#004666] z-[2000] lg:hidden md:hidden flex fixed justify-around items-center p-2">
        <div className="w-[10%]">
          <Link to="/">
            <img className="w-[100%] p-2" src={logo2} alt="" />
          </Link>
        </div>
        <div className="w-[10%]">
          <Link to="/Donhang">
            <img
              className="w-[80%]"
              src="https://cdn-icons-png.flaticon.com/512/3098/3098335.png"
              alt=""
            />
          </Link>
        </div>
        <div className="w-[10%]">
          <Link to="/khuyenmai">
            <img
              className="w-[80%] "
              src="https://cdn-icons-png.flaticon.com/512/5412/5412898.png"
              alt=""
            />
          </Link>
        </div>
        <div className="w-[10%]">
          <Link to="/Thucdon">
            <img
              className="w-[80%] "
              src="https://cdn-icons-png.flaticon.com/512/1721/1721486.png"
              alt=""
            />
          </Link>
        </div>
        <div className="w-[10%]">
          <Link to="/">
            <img
              className="w-[80%] "
              src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
              alt=""
            />
          </Link>
        </div>
        <div className="w-[10%] relative">
          <Link to="/cart">
            <img
              className="w-[80%] "
              src="https://cdn-icons-png.flaticon.com/512/4715/4715128.png"
              alt=""
            />
            <span className="bg-[#aa1934] absolute px-1 font-bold text-white right-[2px] top-[-5px] rounded">
              {totalQuantity ? totalQuantity : 0}
            </span>
          </Link>
        </div>
        <div className="w-[10%]">
          <button className="text-white">
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>
      <div className="absolute top-[100px] bg-[#004666] z-[10]">
        <ul>
          <li>
            <Link to="">Đăng nhập / Tạo tài khoản</Link>
          </li>
          <li>
            <Link to="/EVoucher">Mã e-voucher</Link>
          </li>
          <li>
            <Link to="/Khuyenmai">Khuyến mãi</Link>
          </li>
          <li>
            <Link to="/Thucdon">Thực đơn</Link>
          </li>
          <li>
            <Link to="/Donhang">Theo dõi đơn hàng</Link>
          </li>
          <li>
            <Link to="">Cam kết</Link>
          </li>
          <li>
            <Link to="">Lịch sử</Link>
          </li>
          <li>
            <Link to="">Tuyển dụng</Link>
          </li>
          <li>
            <Link to="">Danh sách cửa hàng</Link>
          </li>
          <li>
            <div>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-instagram"></i>
            </div>
          </li>
          <li>
            <div className="flex items-center mr-8">
              <img
                className="lg:w-[40px] md:w-[50px] h-[40px] md:h-[30px] mr-1"
                src="https://icons-for-free.com/download-icon-flag+nation+vietnam+icon-1320166242583052832_256.icns"
                alt="vn"
              />
              <img
                className="w-[40px] md:w-[50px] h-[40px] md:h-[30px]"
                src="https://vi.seaicons.com/wp-content/uploads/2017/04/United-Kingdom-Flag-1-icon.png"
                alt="en"
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
