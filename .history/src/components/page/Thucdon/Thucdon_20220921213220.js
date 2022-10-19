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

function Thucdon() {
  const [activeFilter, setActiveFilter] = useState(1);
  const { menuOrders, address, orderAddress,setAddress } = useContext(Context);
  console.log(activeFilter);

  console.log(orderAddress.address);

  function handleActiveFilter(index) {
    setActiveFilter(index);
  }

  const handleSelectAddress = () =>{
    setAddress();
  }

  return (
    <div className="pt-[80px] flex h-[100vh] overflow-hidden">
      <div className="w-[1515px] ">
        <div className="content"></div>
        <Order />
        <OrderSide />
        {orderAddress.address ? (
          <div className="bg-[#e3f4fc] flex justify-between items-center">
            <div className="flex items-center  p-4 ml-[100px] text-[#6a6b6c] font-semibold">
              <h1 className="mr-5">Bạn đang chọn:</h1>
              <h1 className="mr-5 text-[#de1736]">
                {orderAddress.takeAway || orderAddress.deliver}
              </h1>
              <h1>{orderAddress.address}</h1>
            </div>
            <div className="p-5" onClick={handleSelectAddress} >
              <i class="fa-solid fa-pen"></i>
            </div>
          </div>
        ) : (
          <SearchAddress />
        )}

        <div className="btn-list flex justify-around px-[120px] py-2 bg-white font-semibold cursor-pointer">
          <div>
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
      <div className="w-[550px] h-[850px]">
        {menuOrders.length > 0 ? <OrderCard /> : <NoneOrder />}
      </div>
    </div>
  );
}

export default Thucdon;
