import React, { useContext, useEffect } from "react";
import Slides from "../../Slides/Slides";
import SearchAddress from "../../SearchAddress/SearchAddress";
import Context from "../../Store/Context";
import { Link } from "react-router-dom";
import Order from "../Order/Order";

function Home() {
  const { pizzaPremium, handlePizza, handleDaHieu } = useContext(Context);

  useEffect(() => {
    const btnBuyNow = document.querySelector(".btn-buynow");
    const orderPizza = document.querySelector(".order-pizza");
    const showBtn = window.addEventListener("load", () => {
      btnBuyNow.style.display = "block";
    });
  }, []);

  useEffect(() => {
    const btnBuyNow = document.querySelector(".btn-buynow");
    const hiddenBtn = window.addEventListener("scroll", () => {
      btnBuyNow.style.display = "none";
    });
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="content"></div>
      <div className="btn-buynow absolute left-[50%] text-[#0078AE] bg-white top-[5%] z-40 font-bold text-xl py-4 px-5 rounded-[50px] border-[#0078AE] solid border-2 translate-x-[-50%] translate-y-[-10%] hidden">
        <a className="mr-3" href="#address">
          Đặt hàng
        </a>{" "}
        <i class="fa-solid fa-arrow-down"></i>
      </div>
      <Slides />
      <SearchAddress />
      <div className="bg-[#f2f4f8] pt-5 px-2">
        <div className="lg:w-[70%] md:w-[80%] m-auto">
          <div className="flex items-center lg:flex-nowrap md:flex-nowrap flex-wrap">
            <h1 className="text-[#212529] font-extrabold text-2xl mr-[100px] lg:mb-0 md:mb-0 mb-5">
              Hôm Nay Ăn Gì?
            </h1>
            <Link
              className="text-[#212529] font-extrabold lg:mr-[100px] md:mr-[100px] mr-[50px]"
              to="/Khuyenmai"
            >
              Khuyến Mãi Mỗi Ngày
            </Link>
            <h2 className="text-[#e31837] font-extrabold border-style: solid border-b-2">
              Best sellers
            </h2>
          </div>
          <div className="grid lg:grid-flow-col md:grid-flow-col lg:auto-cols-fr md:auto-cols-fr g:gap-x-[30px] md:gap-x-[20px] scroll-smooth gap-5 mt-5 snap-x grid-flow-col auto-cols-[80%] overflow-x-scroll ">
            {pizzaPremium.map((pizza, index) => {
              if (pizza.id <= 4) {
                return (
                  <div
                    key={index}
                    className="rounded-[10px] border-style: solid border-2 flex flex-col border-[#dfe4ea] bg-white mb-5 snap-center snap-always"
                  >
                    <div className="w-[100%] h-[auto] mb-4 overflow-hidden rounded-t-lg snap-center">
                      <img
                        className="w-[100%] h-[100%] rounded-t-lg ease-in duration-150 hover:scale-110"
                        src={pizza.image}
                        alt=""
                      />
                    </div>
                    <div className="p-2 h-[50%] lg:text-xl md:text-sm text-align:center text-[#0078ae] font-semibold">
                      <button
                        onClick={() => {
                          handlePizza(pizza);
                        }}
                        className="hover:underline"
                      >
                        {pizza.name}
                      </button>
                    </div>
                    <div className="text-center font-semibold text-[#25282d]">
                      <span>99.000 ₫</span>
                    </div>
                  </div>
                );
              }
            })}
          </div>
          <div className="py-[50px] justify-center flex">
            <Link
              className="font-bold bg-[#0078ae] py-2 px-5 text-white rounded hover:bg-[#005e88]"
              to="/Thucdon"
            >
              Xem Thêm
            </Link>
          </div>
        </div>
      </div>
      <Order />
    </div>
  );
}

export default Home;
