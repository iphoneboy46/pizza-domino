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
  {
    name: "DANH SÁCH CỬA HÀNG",
    to: "/Cuahang",
  },
];

function Header() {
  const { btnExits, setbtnExits, totalQuantity, account } = useContext(Context);
  const [isLogout,setIsLogout] = useState(false);

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

  const handleLogin = () => {
    const loginForm = document.querySelector(".login-form");
    const content = document.querySelector(".content");
    document.body.style.overflow = "hidden";

    content.classList.add("modal");
    loginForm.style.top = `50%`;
    loginForm.style.opacity = "1";
  };

  const handleClick = () =>{

  }

  return (
    <div>
      <div className="bg-[#004666] lg:flex md:flex p-[16px] w-[100%] h-[80px] items-center justify-between fixed z-[2000] overflow-hidden hidden">
        <div className="lg:w-[300px] md:w-[250px] h-[100%] flex items-center">
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
                    className="lg:text-[15px] md:text-[10px]  text-white font-extrabold uppercase lg:ml-5 md:ml-1 h-[100%] pl-5 pr-5 pt-8 pb-8 tracking-widest transition-all linear duration-500 hover:bg-[#00628f] hover:text-wh"
                  >
                    <Link
                      className="pt-8 pb-8 w-[100%] text-center"
                      to={page.to}
                    >
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
              className="lg:w-[40px] md:w-[150px] h-[40px] md:h-[30px] mr-1 "
              src="https://icons-for-free.com/download-icon-flag+nation+vietnam+icon-1320166242583052832_256.icns"
              alt="vn"
            />
            <img
              className="lg:w-[40px] md:w-[150px] h-[40px] md:h-[30px]"
              src="https://vi.seaicons.com/wp-content/uploads/2017/04/United-Kingdom-Flag-1-icon.png"
              alt="en"
            />
          </div>
          <div className="relative flex items-center">
            {account.displayName ? (
              <div className="w-[100%]">
                <div className="relative w-[100%]">
                  <h1 onClick={handleClick} className="text-white font-bold w-[100%] truncate flex items-center cursor-pointer select-none">
                    Hi {account.displayName} <i className="fa-solid fa-caret-down mx-2"></i>
                  </h1>
                </div>
                {isLogout && <div className="absolute bg-white w-[70%] p-1 z-50">
                  {" "}
                  <h2 className="text-center font-bold uppercase">đăng xuất</h2>
                </div>}
              </div>
            ) : (
              <button
                onClick={handleLogin}
                className="hover:bg-[#00628f] w-[100%] h-[100%] hover:text-wh lg:mr-5 mr-0 transition-all linear duration-500"
              >
                <i class="fa-solid fa-user text-white lg:text-4xl md:text-3xl px-[10px] py-[20px]"></i>
              </button>
            )}

            <Link
              to="/cart"
              className="hover:bg-[#00628f] w-[50%] hover:text-wh lg:mr-5 mr-0 transition-all linear duration-500"
            >
              <i class="fa-solid fa-basket-shopping text-white lg:text-4xl md:text-3xl  px-[10px] py-[20px]"></i>
              <span className="bg-[#aa1934] absolute px-2 font-bold text-white lg:right-[25px] md:right-[0px] top-[15px] rounded">
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
        <div className="w-[10%] mt-2">
          {account.displayName ? (
            <h1 className="text-white text-sm font-bold w-[100%] truncate">
              Hi {account.displayName}
            </h1>
          ) : (
            <button onClick={handleLogin}>
              <img
                className="w-[80%] "
                src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
                alt=""
              />
            </button>
          )}
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
