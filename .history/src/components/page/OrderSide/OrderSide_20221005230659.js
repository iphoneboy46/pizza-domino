import React from "react";
import { useContext, useEffect, useState, memo } from "react";
import Context from "../../Store/Context";
import "./OrderSide.css";

function OrderSide() {
  const {
    orderSideDishes,
    quantity,
    setQuantity,
    address,
    inputRef,
    setMenuOrders,
    menuOrders,
  } = useContext(Context);
  
  console.log(orderSideDishes);
 

  useEffect(() => {
    const alertMsg = document.querySelector(".alert-address");
    const btnExits = document.querySelector(".btn-exits2");
    const orderPizza = document.querySelector(".order-SideDishes");
    const content = document.querySelector(".content");
    btnExits.addEventListener("click", () => {
      console.log(123);
      orderPizza.style.top = "-100%";
      content.classList.remove("modal");
      document.body.style.overflow = "auto";
      alertMsg.style.display = "none";
      setQuantity(quantity);
    });
  });

  useEffect(() => {
    const btnExitss = document.querySelector(".btn-exitss2");
    const alertMsg = document.querySelector(".alert-address");
    const orderPizza = document.querySelector(".order-SideDishes");
    const content = document.querySelector(".content");
    btnExitss.addEventListener("click", () => {
      orderPizza.style.top = "-100%";
      content.classList.remove("modal");
      document.body.style.overflow = "auto";
      alertMsg.style.display = "none";
      setQuantity(quantity);
    });
  });

  const handlePlus = () => {
    setQuantity(quantity + 1);
  };

  const handleMinus = () => {
    if (quantity <= 1) {
      return setQuantity(quantity);
    } else {
      return setQuantity(quantity - 1);
    }
  };

  console.log(address);

  const handleOrder2 = (orderSideDishes) => {
    const alertMsg = document.querySelector(".alert-address2");
    const alertCard = document.querySelector(".alert-card2");
    document.body.style.overflow = "auto";
    const orderSideDishesId = menuOrders.find((menu) => {
      return menu.name === orderSideDishes.name;
    });

    if (address) {
      alertMsg.style.display = "none";
      alertCard.style.display = "block";
      if (orderSideDishesId) {
        setMenuOrders(
          menuOrders.map((menu) => {
            return menu.name === orderSideDishesId.name
              ? { 
                ...menu, 
                ...orderSideDishes, 
                quantity: menu.quantity + quantity,
              }
              : menu;
          })
        );
      } else {
        setMenuOrders([
            ...menuOrders,
          { ...orderSideDishes, quantity: quantity },
        ]);
      }
    } else {
      alertMsg.style.display = "block";
    }
    setQuantity(1)
  };

  console.log(address);

  const handleDaHieu2 = () => {
    const alertMsg = document.querySelector(".alert-address2");
    const alertCard = document.querySelector(".alert-card2");
    const orderPizza = document.querySelector(".order-SideDishes");
    const content = document.querySelector(".content");

    orderPizza.style.top = "-100%";
    content.classList.remove("modal");
    document.body.style.overflow = "auto";
    alertMsg.style.display = "none";
    alertCard.style.display = "none";
    setQuantity(quantity);

    inputRef.current.focus();
  };

  return (
    <div className="order-SideDishes w-[800px] h-[calc(100vh-400px)] bg-white flex lg:flex-row md:flex-row flex-col m-auto fixed -top-[100%] left-[50%] -translate-x-[50%] rounded-[6px] ease-in duration-500 z-[9999]">
      <div className="btn-exits2 absolute bg-[#c0142f] p-2 px-4 text-2xl text-white right-0 rounded-tr-md">
        <i class="fa-solid fa-xmark"></i>
      </div>
      <div className="alert-card2 lg:w-[50%] md:w-[50%] w-[80%] absolute bg-[#f2f4f8] top-[50%] left-[50%] z-[99999] -translate-x-[50%] -translate-y-[50%] rounded-md hidden">
          <div
            onClick={handleDaHieu2}
            className="absolute bg-[#c0142f] py-2 px-4 text-2xl text-white right-0 rounded-tr-md z-10"
          >
            <i class="fa-solid fa-xmark"></i>
          </div>
          <h1 className="font-bold text-center mt-[60px]">Thông báo</h1>
          <h1 className="font-bold text-center mt-2">
            Thêm vào giỏ hàng thành công!
          </h1>
          <div className="flex justify-center items-center">
            <button
              onClick={handleDaHieu2}
              className="bg-[#e31837] text-white font-bold px-4 py-3 rounded mt-2 hover:bg-[#c0142f] "
            >
              Đã hiểu
            </button>
          </div>
        </div>
      <div className="alert-address2 w-[400px] h-[200px] absolute bg-[#f2f4f8] top-[50%] left-[50%] z-[99999] -translate-x-[50%] -translate-y-[50%] rounded-md hidden">
        <div className="btn-exitss2 absolute bg-[#c0142f] py-2 px-4 text-2xl text-white right-0 rounded-tr-md">
          <i class="fa-solid fa-xmark"></i>
        </div>
        <h1 className="font-bold text-center mt-[60px]">Thông báo</h1>
        <h1 className="font-bold text-center mt-2">
          Vui lòng nhập địa chỉ để tiếp tục mua hàng
        </h1>
        <div className="flex justify-center items-center">
          <button
            onClick={handleDaHieu2}
            className="bg-[#e31837] text-white font-bold px-4 py-3 rounded mt-2 hover:bg-[#c0142f] "
          >
            Đã hiểu
          </button>
        </div>
      </div>
      <div className="lg:w-[335px] md:w-[335px] w-[100%] h-[50%] rounded-l-lg overflow-hidden">
        <img
          className="w-[100%] h-[100%] bg-no-repeat rounded-l-lg"
          src={orderSideDishes.imageOrder}
          alt={orderSideDishes.name}
        />
      </div>
      <div className="w-[465px] h-[100%] flex flex-col">
        <div className="h-[90%]  py-2 px-8 overflow-y-scroll">
          <div>
            <h1 className="text-[#0078ae] text-[40px] mt-5 mr-5 font-bold text-left leading-[48px] tracking-[3px]">
              {orderSideDishes.name}
            </h1>
          </div>
          <div className="mt-5">
            <span className="text-[#858891] text-[14px] font-medium text-left">
              {orderSideDishes.description}
            </span>
          </div>
          <div>
            <hr className="solid border-b-[2px] w-[4rem] border-[#dfe4ea] my-10" />
          </div>
        </div>
        <div className="flex items-center h-[10%] mb-5 pt-8 p-3 solid border-t-2 border-[#dee2e6] shadow-[0px_0px_16px_rgb(0,42,61,16%)]">
          <div className="flex items-center">
            <button
              className="bg-[#dfe4ea] py-3 px-4 rounded-l-lg w-[50px] hover:bg-[#c8d1db] active:bg-[#c0cad6] active:border-[#c0cad6]"
              onClick={handleMinus}
            >
              <i class="fa-solid fa-minus"></i>
            </button>
            <div className="bg-[#e9ecef] w-[54px] py-3 px-4 text-center">
              {quantity}
            </div>
            <button className="bg-[#dfe4ea] py-3 px-4 rounded-r-lg w-[50px] hover:bg-[#c8d1db] active:bg-[#c0cad6] active:border-[#c0cad6]">
              <i class="fa-solid fa-plus" onClick={handlePlus}></i>
            </button>
          </div>
          <div className="ml-6">
            <button
              className="bg-[#e31837] w-[250px] rounded py-3 px-5 text-white font-bold hover:bg-[#c0142f]"
              onClick={() => {
                handleOrder2(orderSideDishes);
              }}
            >
              Thêm vào giỏ hàng{" "}
              <span>{orderSideDishes.price * quantity} 000₫</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(OrderSide);
