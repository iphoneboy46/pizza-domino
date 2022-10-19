import React, { useContext, useEffect } from "react";
import Slides from "../../Slides/Slides";
import SearchAddress from "../../SearchAddress/SearchAddress";
import Context from "../../Store/Context";
import { Link } from "react-router-dom";
import Order from "../Order/Order";
import "./Home.css";
import Login from "../Login/Login";

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
    <div className="overflow-hidden relative">
      <div className="content"></div>
      <div className="phone-ring text-white text-xl lg:hidden md:hidden flex">
        <div className="overflow-hidden w-[50px] h-[50px]">
          <a className="phone" href="tel:190016099">
            <i class="fa-solid fa-phone"></i>
          </a>
        </div>
      </div>
      <div
        className="w-[50px] h-[50px] text-white text-[12px] 
      p-6 font-bold fixed top-[70%] right-[10%] bg-[#00628F] rounded-[50%] 
      lg:hidden md:hidden flex items-center justify-center z-20"
      >
        <div>
          <Link to="/Thucdon">Đặt hàng</Link>
        </div>
      </div>
      <div className="btn-buynow absolute left-[50%] text-[#0078AE] bg-white top-[5.5%] z-40 font-bold text-xl py-4 px-5 rounded-[50px] border-[#0078AE] solid border-2 translate-x-[-50%] translate-y-[-10%] hidden">
        <a className="mr-3" href="#address">
          Đặt hàng
        </a>{" "}
        <i class="fa-solid fa-arrow-down"></i>
      </div>
      <Slides />
      {orderAddress.address ? (
        <>
          <div className="bg-[#e3f4fc] lg:flex md:flex hidden justify-between items-center">
            <div className="flex items-center  p-4 lg:ml-[100px] md:ml-100px text-[#6a6b6c] font-semibold">
              <h1 className="mr-5">Bạn đang chọn:</h1>
              <h1 className="mr-5 text-[#de1736]">
                {orderAddress.takeAway || orderAddress.deliver}
              </h1>
              <h1>{orderAddress.address}</h1>
            </div>
            <div className="p-5" onClick={handleSelectAddress}>
              <i class="fa-solid fa-pen"></i>
            </div>
          </div>
          <div className="bg-[#e3f4fc] lg:hidden md:hidden block w-[100%]">
            <div className="flex items-center justify-between p-2 ">
              <div className="flex">
                <h1 className="mr-5 font-extrabold">Bạn đang chọn:</h1>
                <h1 className="mr-5 text-[#de1736] uppercase font-semibold">
                  {orderAddress.takeAway || orderAddress.deliver}
                </h1>
              </div>
              <div className="pr-5" onClick={handleSelectAddress}>
                <i class="fa-solid fa-pen"></i>
              </div>
            </div>
            <div className="font-semibold p-2">
              {" "}
              <h1>{orderAddress.address}</h1>
            </div>
          </div>
        </>
      ) : (
        <div>
          {" "}
          <SearchAddress />
        </div>
      )}
      <div className="bg-[#f2f4f8] pt-5 px-2">
        <div className="lg:w-[50%] md:w-[100%] m-auto">
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
          <div className="grid lg:grid-flow-col md:grid-flow-col lg:auto-cols-fr md:auto-cols-fr lg:gap-x-[30px] md:gap-x-[20px] scroll-smooth gap-x-8 mt-5 snap-x snap-mandatory grid-flow-col auto-cols-[70%] overflow-x-scroll ">
            {pizzaPremium.map((pizza, index) => {
              if (pizza.id <= 4) {
                return (
                  <div
                    key={index}
                    className="rounded-[10px] border-style: solid border-2 flex flex-col border-[#dfe4ea] bg-white mb-5 snap-center snap-always"
                  >
                    <div className="w-[100%] h-[180px] mb-4 overflow-hidden rounded-t-lg snap-center">
                      <img
                        className="w-[100%] h-[100%] rounded-t-lg ease-in duration-150 hover:scale-110"
                        src={pizza.image}
                        alt=""
                      />
                    </div>
                    <div className="p-2 h-[40%] lg:text-md md:text-sm text-align:center text-[#0078ae] font-semibold ">
                      <button
                        onClick={() => {
                          handlePizza(pizza);
                        }}
                        className="hover:underline"
                      >
                        <span className="leading-6">{pizza.name}</span>
                      </button>
                    </div>
                    <div className="text-center font-semibold text-[#25282d] pb-5">
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
      <Login />
    </div>
  );
}

export default Home;
