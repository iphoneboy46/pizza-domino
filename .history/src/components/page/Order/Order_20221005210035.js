import React from "react";
import { useContext, useEffect, useState, memo } from "react";
import { Link } from "react-router-dom";
import Context from "../../Store/Context";
import "./Order.css";

function Order() {
  const {
    orderPizza,
    cakeBase,
    cakeSize,
    cakeMore12,
    cakeBorder12,
    cakeMore9,
    cakeBorder9,
    quantity,
    setQuantity,
    address,
    inputRef,
    menuOrders,
    setMenuOrders,
    checkedSize,
    setCheckedSize,
    checkedBase,
    setCheckedBase,
    checkedPrice1,
    setCheckedPrice1,
    checkedPrice5,
    setCheckedPrice5,
    checkedPrice4,
    setCheckedPrice4,
    checkedPrice3,
    setCheckedPrice3,
    checkedPrice2,
    setCheckedPrice2,
    checkedBorder12,
    setCheckedBorder12,
    checkedMore12,
    setCheckedMore12,
    checkedBorder9,
    setCheckedBorder9,
    checkedMore9,
    setCheckedMore9,
    options9,
    setOptions9,
    options12,
    setOptions12,
  } = useContext(Context);

  const pricePizza = [
    checkedPrice1,
    checkedPrice2,
    checkedPrice3,
    checkedPrice4,
    checkedPrice5,
  ];
  const total = pricePizza.reduce((acc, price) => {
    const results = acc + price;
    return results;
  });

  const OrderStyle = {
    price: total,
    totalP: total * quantity,
    base: checkedBase,
    size: checkedSize,
    border9: checkedBorder9,
    more9: checkedMore9,
    border12: checkedBorder12,
    more12: checkedMore12,
  };
  console.log(total);


  const handleOrder = (orderPizza, OrderStyle) => {
    const alertMsg = document.querySelector(".alert-address");
    const alertCard = document.querySelector(".alert-card");
    console.log(alertCard);
    document.body.style.overflow = "auto";
    if (address) {
      alertMsg.style.display = "none";
      alertCard.style.display = "block";
      
      const pizzaName = menuOrders.find((menuOrder) => {
        return menuOrder.name === orderPizza.name;
      });


      const pizzaSize = menuOrders.find((menuOrder) => {
        return menuOrder.size === OrderStyle.size;
      });

      const pizzaBase = menuOrders.find((menuOrder) => {
        return menuOrder.base === OrderStyle.base;
      });

      if (pizzaName && pizzaSize && pizzaBase) {
        setMenuOrders(
          menuOrders.map((menuOrder) => {
            return menuOrder.name === orderPizza.name && pizzaSize && pizzaBase
              ? {
                  ...menuOrder,
                  ...orderPizza,
                  quantity: menuOrder.quantity + quantity,
                  price: menuOrder.price * menuOrder.quantity,
                 
                }
              : menuOrder;
          })
        );
      } else {
        setMenuOrders([
          ...menuOrders,
          { ...orderPizza, ...OrderStyle, quantity: quantity },
        ]);
      }
    } else {
      alertMsg.style.display = "block";
    }
    setQuantity(1);
  };



  const handleExitAlert = () => {
    const alertMsg = document.querySelector(".alert-address");
    const alertCard = document.querySelector(".alert-card");
    const orderPizzaCode = document.querySelector(".order-pizza");
    const content = document.querySelector(".content");

    orderPizzaCode.style.top = "-100%";
    content.classList.remove("modal");
    document.body.style.overflow = "auto";
    alertMsg.style.display = "none";
    alertCard.style.display = "none";
    setQuantity(quantity);

    if (address === "") {
      inputRef.current.focus();
    } else {
      return;
    }
  };

  useEffect(() => {
    if (checkedSize === "Cỡ 12 inch") {
      setCheckedPrice2(0);
      setCheckedPrice3(0);
      setCheckedMore9("");
      setCheckedBorder9("");
    } else if (checkedSize === "Cỡ 9 inch") {
      setCheckedPrice4(0);
      setCheckedPrice5(0);
      setCheckedMore12("");
      setCheckedBorder12("");
    } else {
      setCheckedPrice2(0);
      setCheckedPrice3(0);
      setCheckedPrice4(0);
      setCheckedPrice5(0);
      setCheckedMore9("");
      setCheckedBorder9("");
      setCheckedMore12("");
      setCheckedBorder12("");
    }
  });

  useEffect(() => {
    if (checkedSize === "Cỡ 12 inch") {
      setOptions12(true);
      setOptions9(false);
    } else if (checkedSize === "Cỡ 9 inch") {
      setOptions9(true);
      setOptions12(false);
    } else {
      setOptions12(false);
      setOptions9(false);
    }
  }, [checkedSize]);

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
          <h1 className="font-bold text-center mt-[60px]">Thông báo</h1>
          <h1 className="font-bold text-center mt-2">
            Thêm vào giỏ hàng thành công!
          </h1>
          <div className="flex justify-center items-center">
            <button
              onClick={handleExitAlert}
              className="bg-[#e31837] text-white font-bold px-4 py-3 rounded mt-2 hover:bg-[#c0142f] "
            >
              Đã hiểu
            </button>
          </div>
        </div>
        <div className="alert-address lg:w-[50%] md:w-[50%] w-[80%] lg:h-[30%] md:h-[20%] h-[10%] lg:absolute bg-[#f2f4f8] top-[50%] left-[50%] z-[9999] -translate-x-[50%] -translate-y-[50%] rounded-md hidden">
          <div onClick={handleExitAlert} className="absolute bg-[#c0142f] py-2 px-4 text-2xl text-white right-0 rounded-tr-md">
            <i class="fa-solid fa-xmark"></i>
          </div>
          <h1 className="font-bold text-center mt-[60px]">Thông báo</h1>
          <h1 className="font-bold text-center mt-2">
            Vui lòng nhập địa chỉ để tiếp tục mua hàng{" "}
          </h1>
          <div className="flex justify-center items-center">
            <button
              onClick={handleExitAlert}
              className="bg-[#e31837] text-white font-bold px-4 py-3 rounded mt-2 hover:bg-[#c0142f] "
            >
              Đã hiểu
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
              <h1 className="font-bold pb-5">Chọn đế bánh</h1>
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
              <h1 className="font-bold my-6">Chọn cỡ bánh</h1>
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
                        <span className="ml-1">{cake.price} 000₫</span>
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
                <h1 className="font-bold my-6">Tùy chọn thêm</h1>
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
                          <span className="ml-1">{cake.price} 000₫</span>
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
                <h1 className="font-bold my-6">Tùy chọn viền</h1>
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
                          <span className="ml-1">{cake.price} 000₫</span>
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
                <h1 className="font-bold my-6">Tùy chọn thêm</h1>
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
                          <span className="ml-1">{cake.price} 000₫</span>
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
                <h1 className="font-bold my-6">Tùy chọn viền</h1>
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
                          <span className="ml-1">{cake.price} 000₫</span>
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
                Thêm vào giỏ hàng <span>{total * quantity} 000₫</span>
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
              handleOrder(orderPizza, OrderStyle);
            }}
          >
            Thêm vào giỏ hàng <span>{total * quantity} 000₫</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default memo(Order);
