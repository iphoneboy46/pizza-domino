import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
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
    <div className="bg-[#004666] flex p-[16px] w-[100%] h-[80px] items-center justify-between fixed z-[2000] overflow-hidden">
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
        <div className="flex items-center lg:mr-8 md:mr-8">
          <img
            className="lg:w-[40px] md:w-[30px] h-[40px] md:h-[30px] mr-1"
            src="https://icons-for-free.com/download-icon-flag+nation+vietnam+icon-1320166242583052832_256.icns"
            alt="vn"
          />
          <img
            className="w-[40px] md:w-[30px] h-[40px] md:h-[30px]"
            src="https://vi.seaicons.com/wp-content/uploads/2017/04/United-Kingdom-Flag-1-icon.png"
            alt="en"
          />
        </div>
        <div className="flex items-center">
          <i class="fa-solid fa-user text-white text-4xl lg:mr-10 md:mr-2"></i>
          <div>
            <i class="fa-solid fa-basket-shopping text-white text-4xl lg:mr-4 md:mr-2  relative"></i>
            <span className="bg-[#aa1934] absolute px-2 font-bold text-white right-4 top-4 rounded">
              {totalQuantity ? totalQuantity : 0}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
