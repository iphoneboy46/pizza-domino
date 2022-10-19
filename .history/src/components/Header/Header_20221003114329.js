import React, { useContext, useEffect, useState } from "react";
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
  const [btnExits, setbtnExits] = useState(true);
  const handleMenu = () => {
    const menuMb = document.querySelector(".menu-Mobile");
    menuMb.style.left = "0";
    document.body.style.overflow = "hidden";
    setbtnExits(false);
  };

  const handleMenuExits = () => {
    const menuMb = document.querySelector(".menu-Mobile");
    menuMb.style.left = "-100%";
    setbtnExits(true);
    document.body.style.overflow = "auto";
  };
  return (
    <div>
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
              className="lg:w-[40px] md:w-[50px] h-[40px] md:h-[30px] mr-1 "
              src="https://icons-for-free.com/download-icon-flag+nation+vietnam+icon-1320166242583052832_256.icns"
              alt="vn"
            />
            <img
              className="w-[40px] md:w-[50px] h-[40px] md:h-[30px]"
              src="https://vi.seaicons.com/wp-content/uploads/2017/04/United-Kingdom-Flag-1-icon.png"
              alt="en"
            />
          </div>
          <div className="relative">
            <Link to="/cart">
              <i class="fa-solid fa-basket-shopping text-white text-4xl"></i>
              <span className="bg-[#aa1934] absolute px-2 font-bold text-white right-[-4px] top-[-4px] rounded">
                {totalQuantity ? totalQuantity : 0}
              </span>
            </Link>
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
          {btnExits ? (
            <a href="#mb" className="text-white text-2xl" onClick={handleMenu}>
              <i class="fa-solid fa-bars"></i>
            </a>
          ) : (
            <button className="text-white text-2xl" onClick={handleMenuExits}>
              <i class="fa-solid fa-xmark"></i>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
