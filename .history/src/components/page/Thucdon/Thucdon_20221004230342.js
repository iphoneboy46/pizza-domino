import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Pizza from "../Pizza/Pizza";
import Pasta from "../Pasta/Pasta";
import ExtraDishes from "../ExtraDishes/ExtraDishes";
import Dessert from "../Dessert/Dessert";
import Drink from "../Drink/Drink";
import SearchAddress from "../../SearchAddress/SearchAddress";
import Order from "../Order/Order";
import OrderSide from "../OrderSide/OrderSide";
import NoneOrder from "../NoneOrder/NoneOrder";
import OrderCard from "../OrderCard/OrderCard";
import Context from "../../Store/Context";

import "./Thucdon.css";
import OrderEdit from "../OrderEdit/OrderEdit";

function Thucdon() {
  const [activeFilter, setActiveFilter] = useState(1);
  const { menuOrders, address, orderAddress, setAddress, setOrderAddress } =
    useContext(Context);
  console.log(activeFilter);

  console.log(orderAddress.address);

  function handleActiveFilter(index) {
    setActiveFilter(index);
  }

  const handleSelectAddress = () => {
    setOrderAddress("");
    setAddress("");
  };
  console.log(address);

  return (
    <div className="pt-[80px] w-[100%] flex h-[100vh] overflow-hidden">
      <div className="lg:w-[75%] md:w-[100%] ">
        <div className="content"></div>
        <Order />
        <OrderEdit />
        <OrderSide />
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
                  <h1 className="mr-5 font-extrabold ">Bạn đang chọn:</h1>
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
          <SearchAddress />
        )}

        <div className="w-[100%]lg:overflow-hidden md:overflow-hidden overflow-x-scroll">
          <div className="btn-list flex justify-around lg:w-[100%] md:w-[100%] w-[180%] lg:px-[120px] md:px-[120px] py-2 bg-white font-semibold cursor-pointer lg:mb-0 md:mb-0 mb-2">
            <div className="">
              <Link to="/khuyenmai">Khuyến mãi mỗi ngày</Link>
            </div>
            <div
              className={activeFilter === 1 ? "btn active-filter" : "btn"}
              onClick={() => {
                handleActiveFilter(1);
              }}
            >
              Pizza
            </div>
            <div
              onClick={() => {
                handleActiveFilter(2);
              }}
              className={activeFilter === 2 ? "btn active-filter" : "btn"}
            >
              Mỳ Ý
            </div>
            <div
              onClick={() => {
                handleActiveFilter(3);
              }}
              className={activeFilter === 3 ? "btn active-filter" : "btn"}
            >
              Món phụ
            </div>
            <div
              onClick={() => {
                handleActiveFilter(4);
              }}
              className={activeFilter === 4 ? "btn active-filter" : "btn"}
            >
              Tráng miệng
            </div>
            <div
              onClick={() => {
                handleActiveFilter(5);
              }}
              className={activeFilter === 5 ? "btn active-filter" : "btn"}
            >
              Nước uống
            </div>
          </div>
        </div>
        <div>
          <div
            onClick={() => {
              handleActiveFilter(1);
            }}
            className={activeFilter === 1 ? "active-filter-show" : "btn-hidden"}
          >
            <Pizza />
          </div>
          <div
            onClick={() => {
              handleActiveFilter(2);
            }}
            className={activeFilter === 2 ? "active-filter-show" : "btn-hidden"}
          >
            <Pasta />
          </div>
          <div
            onClick={() => {
              handleActiveFilter(3);
            }}
            className={activeFilter === 3 ? "active-filter-show" : "btn-hidden"}
          >
            <ExtraDishes />
          </div>
          <div
            onClick={() => {
              handleActiveFilter(4);
            }}
            className={activeFilter === 4 ? "active-filter-show" : "btn-hidden"}
          >
            <Dessert />
          </div>
          <div
            onClick={() => {
              handleActiveFilter(5);
            }}
            className={activeFilter === 5 ? "active-filter-show" : "btn-hidden"}
          >
            <Drink />
          </div>
        </div>
      </div>
      <div className="lg:w-[25%] h-[3000px] lg:block md:hidden hidden">
        {menuOrders.length > 0 ? <OrderCard /> : <NoneOrder />}
      </div>
    </div>
  );
}

export default Thucdon;
