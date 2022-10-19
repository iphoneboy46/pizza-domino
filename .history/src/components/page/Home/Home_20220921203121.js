import React, { useContext, useEffect } from "react";
import Slides from "../../Slides/Slides";
import SearchAddress from "../../SearchAddress/SearchAddress";
import Context from "../../Store/Context";
import { Link } from "react-router-dom";
import Order from "../Order/Order";

function Home() {
  const { pizzaPremium, handlePizza } = useContext(Context);

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
      <div className="alert-address w-[400px] h-[200px] absolute bg-[#f2f4f8] top-[50%] left-[50%] z-[99999] -translate-x-[50%] -translate-y-[50%] rounded-md hidden">
        <div className="btn-exitss absolute bg-[#c0142f] py-2 px-4 text-2xl text-white right-0 rounded-tr-md">
          <i class="fa-solid fa-xmark"></i>
        </div>
        <h1 className="font-bold text-center mt-[60px]">Thông báo</h1>
        <h1 className="font-bold text-center mt-2">
          Vui lòng nhập địa chỉ để tiếp tục mua hàng{" "}
        </h1>
        <div className="flex justify-center items-center">
          <button
            onClick={handleDaHieu}
            className="bg-[#e31837] text-white font-bold px-4 py-3 rounded mt-2 hover:bg-[#c0142f] "
          >
            Đã hiểu
          </button>
        </div>
      </div>
      <div className="btn-buynow absolute left-[50%] text-[#0078AE] bg-white top-[10%] z-40 font-bold text-xl py-4 px-5 rounded-[50px] border-[#0078AE] solid border-2 translate-x-[-50%] translate-y-[-10%] hidden">
        <a className="mr-3" href="#address">
          Đặt hàng
        </a>{" "}
        <i class="fa-solid fa-arrow-down"></i>
      </div>
      <Slides />
      <SearchAddress />
     <div className="bg-[#f2f4f8] pt-5">
        <div className="w-[1140px] m-auto">
          <div className="flex items-center">
            <h1 className="text-[#212529] font-extrabold text-2xl mr-[100px]">
              Hôm Nay Ăn Gì?
            </h1>
            <Link
              className="text-[#212529] font-extrabold mr-[100px]"
              to="/Khuyenmai"
            >
              Khuyến Mãi Mỗi Ngày
            </Link>
            <h2 className="text-[#e31837] font-extrabold border-style: solid border-b-2">
              Best sellers
            </h2>
          </div>
          <div className="grid grid-flow-col auto-cols-fr gap-x-[30px] mt-5">
            {pizzaPremium.map((pizza, index) => {
              if (pizza.id <= 4) {
                return (
                  <div
                    key={index}
                    className="rounded-[10px] border-style: solid border-2 flex flex-col border-[#dfe4ea] bg-white"
                  >
                    <div className="w-[100%] h-[auto] mb-4 overflow-hidden rounded-t-lg">
                      <img
                        className="w-[100%] h-[100%] rounded-t-lg ease-in duration-150 hover:scale-110"
                        src={pizza.image}
                        alt=""
                      />
                    </div>
                    <div className="p-2 h-[80px] text-[#0078ae] font-semibold">
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