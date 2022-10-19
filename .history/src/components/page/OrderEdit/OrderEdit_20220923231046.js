import React from "react";
import { useContext, useEffect, useState, memo } from "react";
import { Link } from "react-router-dom";
import Context from "../../Store/Context";
import "./OrderEdit.css";

function OrderEdit() {
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
  } = useContext(Context);
  const [options12, setOptions12] = useState(false);
  const [options9, setOptions9] = useState(false);

  const [checkedBase, setCheckedBase] = useState("Đế mỏng giòn");
  const [checkedSize, setCheckedSize] = useState("Cỡ 9 inch");
  const [checkedMore9, setCheckedMore9] = useState("");
  const [checkedBorder9, setCheckedBorder9] = useState("");
  const [checkedMore12, setCheckedMore12] = useState("");
  const [checkedBorder12, setCheckedBorder12] = useState("");
  const [checkedPrice1, setCheckedPrice1] = useState(189);
  const [checkedPrice2, setCheckedPrice2] = useState(0);
  const [checkedPrice3, setCheckedPrice3] = useState(0);
  const [checkedPrice4, setCheckedPrice4] = useState(0);
  const [checkedPrice5, setCheckedPrice5] = useState(0);

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
    price: total * quantity,
    base: checkedBase,
    size: checkedSize,
    border9: checkedBorder9,
    more9: checkedMore9,
    border12: checkedBorder12,
    more12: checkedMore12,
  };
  console.log(total);

  useEffect(() => {
    const alertMsg = document.querySelector(".alert-address");
    const alertCard = document.querySelector(".alert-card");
    const btnExits = document.querySelector(".btn-exits2");
    const orderPizzaEdit = document.querySelector(".order-pizzaEdit");
    const content = document.querySelector(".content");
    btnExits.addEventListener("click", () => {
      orderPizzaEdit.style.top = "-100%";
      content.classList.remove("modal");
      document.body.style.overflow = "auto";
      alertMsg.style.display = "none";
      alertCard.style.display = "none";
      setQuantity(quantity);
    });
  });

  useEffect(() => {
    const btnExitss = document.querySelector(".btn-exitss2");
    const alertMsg = document.querySelector(".alert-address");
    const alertCard = document.querySelector(".alert-card");
    const orderPizzaEdit = document.querySelector(".order-pizzaEdit");
    const content = document.querySelector(".content");
    btnExitss.addEventListener("click", () => {
      console.log(123);
      orderPizzaEdit.style.top = "-100%";
      content.classList.remove("modal");
      document.body.style.overflow = "auto";
      alertMsg.style.display = "none";
      alertCard.style.display = "none";
      setQuantity(quantity);
    });
  });

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

  console.log(address);

  const handleOrderEdit = (orderPizza, OrderStyle) => {
    const alertMsg = document.querySelector(".alert-address");
    const alertCard = document.querySelector(".alert-cards");
    console.log(alertCard);
    document.body.style.overflow = "auto";
    if (address) {
      alertMsg.style.display = "none";
      alertCard.style.display = "block";
      const pizzaId = menuOrders.find((menuOrder) => {
        return menuOrder.id === orderPizza.id;
      });

      console.log(pizzaId);

      const pizzaSize = menuOrders.find((menuOrder) => {
        return menuOrder.size === OrderStyle.size;
      });

      const pizzaBase = menuOrders.find((menuOrder) => {
        return menuOrder.base === OrderStyle.base;
      });

      if (pizzaId && pizzaSize && pizzaBase) {
        setMenuOrders(
          menuOrders.map((menuOrder) => {
            return menuOrder.id === orderPizza.id && pizzaSize && pizzaBase
              ? {
                  ...menuOrder,
                  ...orderPizza,
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
  };

  console.log(address);

  const handleDaHieu = () => {
    const alertMsg = document.querySelector(".alert-address");
    const alertCard = document.querySelector(".alert-cards");
    const orderPizzaEdit = document.querySelector(".order-pizzaEdit");
    const content = document.querySelector(".content");

    orderPizzaEdit.style.top = "-100%";
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

  return (
    <div className="order-pizzaEdit w-[800px] h-[calc(100vh-140px)] bg-white flex m-auto fixed -top-[100%] left-[50%] -translate-x-[50%] rounded-[6px] ease-in duration-500 z-[9999]">
      <div className="btn-exits2 absolute bg-[#c0142f] p-2 px-4 text-2xl text-white right-0 rounded-tr-md">
        <i class="fa-solid fa-xmark"></i>
      </div>
      <div className="alert-cards w-[400px] h-[200px] absolute bg-[#f2f4f8] top-[50%] left-[50%] z-[99999] -translate-x-[50%] -translate-y-[50%] rounded-md hidden">
        <div className="btn-exitss2 absolute bg-[#c0142f] py-2 px-4 text-2xl text-white right-0 rounded-tr-md">
          <i class="fa-solid fa-xmark"></i>
        </div>
        <h1 className="font-bold text-center mt-[60px]">Thông báo</h1>
        <h1 className="font-bold text-center mt-2">
          Cập nhật sản phẩm thành công!
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
      {menuOrders.map((menu) => {
        <>
          <div className="w-[335px] h-[100%] rounded-l-lg">
            <img
              className="w-[100%] h-[100%] bg-no-repeat rounded-l-lg"
              src={orderPizza.imageOrder}
              alt={orderPizza.name}
            />
          </div>
          <div className="w-[465px] h-[100%] flex flex-col">
            <div className="h-[90%]  py-2 px-8 overflow-y-scroll">
              <div>
                <h1 className="text-[#0078ae] text-[40px] font-bold text-left leading-[48px] tracking-[3px]">
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
            <div className="flex items-center h-[10%] p-3 solid border-t-2 border-[#dee2e6] shadow-[0px_0px_16px_rgb(0,42,61,16%)]">
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
                    handleOrderEdit(orderPizza, OrderStyle);
                  }}
                >
                  Cập nhật sản phẩm <span>{total * quantity} 000₫</span>
                </button>
              </div>
            </div>
          </div>
        </>;
      })}
    </div>
  );
}

export default memo(OrderEdit);
