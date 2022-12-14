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
    <div className="order-pizza lg:w-[50%] md:w-[90%] w-[90%]  h-[calc(100vh-20%)] bg-white flex lg:flex-row md:flex-row flex-col m-auto fixed -top-[100%] left-[50%] -translate-x-[50%] rounded-[6px] ease-in duration-500 z-[9999] lg:overflow-hidden md:overflow-hidden">
    <div className="flex lg:flex-row md:flex-row flex-col overflow-y-scroll">
      <div onClick={handleExitAlert} className="absolute bg-[#c0142f] p-2 px-4 text-2xl text-white right-0 rounded-tr-md">
        <i class="fa-solid fa-xmark"></i>
      </div>
      <div className="alert-card lg:w-[50%] md:w-[50%] w-[80%] absolute bg-[#f2f4f8] top-[50%] left-[50%] z-[99999] -translate-x-[50%] -translate-y-[50%] rounded-md hidden">
        <div
          onClick={handleExitAlert}
          className="absolute bg-[#c0142f] py-2 px-4 text-2xl text-white right-0 rounded-tr-md z-10"
        >
          <i class="fa-solid fa-xmark"></i>
        </div>
        <h1 className="font-bold text-center mt-[60px]">Th??ng b??o</h1>
        <h1 className="font-bold text-center mt-2">
          Th??m v??o gi??? h??ng th??nh c??ng!
        </h1>
        <div className="flex justify-center items-center">
          <button
            onClick={handleExitAlert}
            className="bg-[#e31837] text-white font-bold px-4 py-3 rounded mt-2 hover:bg-[#c0142f] "
          >
            ???? hi???u
          </button>
        </div>
      </div>
      <div className="alert-address lg:w-[50%] md:w-[50%] w-[80%] md:h-[25%] absolute bg-[#f2f4f8] top-[50%] left-[50%] z-[99999] -translate-x-[50%] -translate-y-[50%] rounded-md hidden">
        <div onClick={handleExitAlert} className="absolute bg-[#c0142f] py-2 px-4 text-2xl text-white right-0 rounded-tr-md">
          <i class="fa-solid fa-xmark"></i>
        </div>
        <h1 className="font-bold text-center mt-[60px]">Th??ng b??o</h1>
        <h1 className="font-bold text-center mt-2">
          Vui l??ng nh???p ?????a ch??? ????? ti???p t???c mua h??ng{" "}
        </h1>
        <div className="flex justify-center items-center">
          <button
            onClick={handleExitAlert}
            className="bg-[#e31837] text-white font-bold px-4 py-3 rounded mt-2 hover:bg-[#c0142f] "
          >
            ???? hi???u
          </button>
        </div>
      </div>
      <div className=" lg:w-[40%] md:w-[40%] w-[100%] lg:h-[100%] md:h-[100%] h-[30%]  rounded-l-lg lg:block md:block hidden">
        <img
          className="w-[100%] h-[100%] bg-no-repeat rounded-l-lg"
          src={orderPizza.imageOrder}
          alt={orderPizza.name}
        />
      </div>
      <div className=" lg:w-[40%] md:w-[40%] w-[100%] lg:h-[100%] md:h-[100%] h-[30%]  rounded-l-lg lg:hidden md:hidden block">
        <img
          className="w-[100%] h-[100%] bg-no-repeat rounded-l-lg"
          src={orderPizza.imageMB}
          alt={orderPizza.name}
        />
      </div>
      <div className="lg:w-[60%] md:w-[60%] w-[100%] h-[100%] flex flex-col">
        <div className="h-[90%]  py-2 px-8 lg:overflow-y-scroll md:overflow-y-scroll">
          <div>
            <h1 className="text-[#0078ae] lg:text-4xl md:text-4xl text-lg font-bold text-left lg:leading-[48px] md:leading-[48px] leading-[28px] tracking-[3px]">
              {orderPizza.name}
            </h1>
          </div>
          <div className="mt-5">
            <span className="text-[#858891] text-[14px] font-medium text-left">
              {orderPizza.description}
            </span>
          </div>
          <div>
            <hr className="solid border-b-[2px] w-[4rem] border-[#dfe4ea] my-10" />
          </div>

          <div>
            <h1 className="font-bold pb-5">Ch???n ????? b??nh</h1>
            {cakeBase.map((cake) => {
              return (
                <div
                  key={cake.id}
                  className="flex items-center justify-between solid border-b-[2px] border-[#dfe4ea] py-2"
                >
                  <div className="flex items-center justify-between ">
                    <input
                      id={cake.name}
                      type="radio"
                      checked={checkedBase === cake.name}
                      onChange={() => {
                        setCheckedBase(cake.name);
                      }}
                    />
                    <label
                      for={cake.name}
                      className="font-bold relative ml-10"
                    >
                      <span className="ml-2">{cake.name}</span>
                    </label>
                  </div>
                  <div>
                    <img
                      className="w-[40px] h-[40px]"
                      src={cake.image}
                      alt=""
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <h1 className="font-bold my-6">Ch???n c??? b??nh</h1>
            {cakeSize.map((cake, index) => {
              return (
                <div
                  key={cake.id}
                  className="flex items-center justify-between solid border-b-[2px] border-[#dfe4ea] py-2"
                >
                  <div className="flex items-center justify-between ">
                    <input
                      id={cake.name}
                      type="radio"
                      checked={checkedSize === cake.name}
                      onChange={() => {
                        setCheckedSize(cake.name);
                        setCheckedPrice1(cake.price);
                      }}
                    />
                    <label
                      for={cake.name}
                      className="font-bold relative ml-10"
                    >
                      <span className="ml-2">{cake.name}</span> ={" "}
                      <span className="ml-1">{cake.price} 000???</span>
                    </label>
                  </div>
                  <div>
                    <img
                      className="w-[40px] h-[40px]"
                      src={cake.image}
                      alt=""
                    />
                  </div>
                </div>
              );
            })}
          </div>
          {options9 && (
            <div className="cakeMore">
              <h1 className="font-bold my-6">T??y ch???n th??m</h1>
              {cakeMore9.map((cake) => {
                return (
                  <div
                    key={cake.id}
                    className="flex items-center justify-between solid border-b-[2px] border-[#dfe4ea] py-2"
                  >
                    <div className="flex items-center justify-between ">
                      <input
                        id={cake.name}
                        type="radio"
                        checked={checkedMore9 === cake.name}
                        onChange={() => {
                          setCheckedMore9(cake.name);
                          setCheckedPrice2(cake.price);
                        }}
                      />
                      <label
                        for={cake.name}
                        className="font-bold relative ml-10"
                      >
                        <span className="ml-2">{cake.name}</span> ={" "}
                        <span className="ml-1">{cake.price} 000???</span>
                      </label>
                    </div>
                    <div>
                      <img
                        className="w-[40px] h-[40px]"
                        src={cake.image}
                        alt=""
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          {options9 && (
            <div className="cakeBorder mb-10">
              <h1 className="font-bold my-6">T??y ch???n vi???n</h1>
              {cakeBorder9.map((cake) => {
                return (
                  <div
                    key={cake.id}
                    className="flex items-center justify-between solid border-b-[2px] border-[#dfe4ea] py-2"
                  >
                    <div className="flex items-center justify-between ">
                      <input
                        id={cake.name}
                        type="radio"
                        checked={checkedBorder9 === cake.name}
                        onChange={() => {
                          setCheckedBorder9(cake.name);
                          setCheckedPrice3(cake.price);
                        }}
                      />
                      <label
                        for={cake.name}
                        className="font-bold relative ml-10"
                      >
                        <span className="ml-2">{cake.name}</span> ={" "}
                        <span className="ml-1">{cake.price} 000???</span>
                      </label>
                    </div>
                    <div>
                      <img
                        className="w-[40px] h-[40px]"
                        src={cake.image}
                        alt=""
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          {options12 && (
            <div className="cakeMore">
              <h1 className="font-bold my-6">T??y ch???n th??m</h1>
              {cakeMore12.map((cake) => {
                return (
                  <div
                    key={cake.id}
                    className="flex items-center justify-between solid border-b-[2px] border-[#dfe4ea] py-2"
                  >
                    <div className="flex items-center justify-between ">
                      <input
                        id={cake.name}
                        type="radio"
                        checked={checkedMore12 === cake.name}
                        onChange={() => {
                          setCheckedMore12(cake.name);
                          setCheckedPrice4(cake.price);
                        }}
                      />
                      <label
                        for={cake.name}
                        className="font-bold relative ml-10"
                      >
                        <span className="ml-2">{cake.name}</span> ={" "}
                        <span className="ml-1">{cake.price} 000???</span>
                      </label>
                    </div>
                    <div>
                      <img
                        className="w-[40px] h-[40px]"
                        src={cake.image}
                        alt=""
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          {options12 && (
            <div className="cakeBorder mb-10">
              <h1 className="font-bold my-6">T??y ch???n vi???n</h1>
              {cakeBorder12.map((cake) => {
                return (
                  <div
                    key={cake.id}
                    className="flex items-center justify-between solid border-b-[2px] border-[#dfe4ea] py-2"
                  >
                    <div className="flex items-center justify-between ">
                      <input
                        id={cake.name}
                        type="radio"
                        checked={checkedBorder12 === cake.name}
                        onChange={() => {
                          setCheckedBorder12(cake.name);
                          setCheckedPrice5(cake.price);
                        }}
                      />
                      <label
                        for={cake.name}
                        className="font-bold relative ml-10"
                      >
                        <span className="ml-2">{cake.name}</span> ={" "}
                        <span className="ml-1">{cake.price} 000???</span>
                      </label>
                    </div>
                    <div>
                      <img
                        className="w-[40px] h-[40px]"
                        src={cake.image}
                        alt=""
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="lg:flex md:flex hidden items-center h-[10%] p-3 solid border-t-2 border-[#dee2e6] shadow-[0px_0px_16px_rgb(0,42,61,16%)]">
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
          <div className="ml-2">
            <button
              className="bg-[#e31837] w-[250px] rounded py-3 px-5 text-white font-bold hover:bg-[#c0142f]"
              onClick={() => {
                handleOrder(orderPizza, OrderStyle);
              }}
            >
              Th??m v??o gi??? h??ng <span>{total * quantity} 000???</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="flex items-center flex-col h-[80%] p-5 solid border-t-2 border-[#dee2e6] shadow-[0px_0px_16px_rgb(0,42,61,16%)] overflow-hidden lg:hidden md:hidden">
      <div className="flex items-center mb-2">
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
      <div className="ml-2">
        <button
          className="bg-[#e31837] w-[250px] rounded py-3 px-5 text-white font-bold hover:bg-[#c0142f]"
          onClick={() => {
            handleOrder2(orderSideDishes);
          }}
        >
          Th??m v??o gi??? h??ng <span>{orderSideDishes.price * quantity} 000???</span>
        </button>
      </div>
    </div>
  </div>
  );
}

export default memo(OrderSide);
