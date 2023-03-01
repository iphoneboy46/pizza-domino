import React from "react";
import { useContext, useEffect, useState, memo } from "react";
import { Link } from "react-router-dom";
import Context from "../../Store/Context";

function OrderEditDishes() {
  const {
    orderSideDishes,
    quantity,
    setQuantity,
    address,
    inputRef,
    menuOrders,
    setMenuOrders,
    nameEditMonPhu,
    s,
  } = useContext(Context);

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
  console.log(menuOrders);
  console.log(orderSideDishes);

  const handleOrderEditDishes = () => {
    const alertMsg = document.querySelector(".alert-address");
    const alertCards = document.querySelector(".alert-cardEdit2");
    console.log(alertCards);
    document.body.style.overflow = "auto";
    if (address) {
      alertMsg.style.display = "none";
      alertCards.style.display = "block";
      const dishesName = menuOrders.find((menuOrder) => {
        return menuOrder.name === orderSideDishes.name;
      });

      if (dishesName) {
        setMenuOrders(
          menuOrders.map((menuOrder) => {
            return menuOrder.name === orderSideDishes.name
              ? {
                  ...menuOrder,
                  ...orderSideDishes,
                  quantity: quantity,
                }
              : menuOrder;
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
  };

  console.log(address);

  const handleDaHieu2 = () => {
    const alertMsg = document.querySelector(".alert-address");
    const alertCards = document.querySelector(".alert-cardEdit2");
    const orderSideDishesEdit = document.querySelector(".order-DishesEdit");
    const content = document.querySelector(".content");

    orderSideDishesEdit.style.top = "-100%";
    content.classList.remove("modal");
    document.body.style.overflow = "auto";
    alertMsg.style.display = "none";
    alertCards.style.display = "none";
    setQuantity(quantity);

    if (address === "") {
      inputRef.current.focus();
    } else {
      return;
    }
  };

  const [totalConvert, setTotalConvert] = useState();

  useEffect(() => {
    let total = orderSideDishes.map((order)=>{
        return order.price
    });
    let totalAfter = total * quantity;
    setTotalConvert(totalAfter);

    if (totalAfter > 1000) {
      const numberFirst = totalAfter.toFixed().split("").slice(0, 1);
      const numberLast = totalAfter.toFixed().split("").slice(1).join("");

      const numberTotal = numberFirst + "." + numberLast;
      setTotalConvert(numberTotal);
    }
    if (totalAfter > 10000) {
      console.log("asdasdasasd");
      const numberFirst2 = totalAfter.toFixed().split("").slice(0, 2).join("");
      console.log(numberFirst2);
      const numberLast2 = totalAfter.toFixed().split("").slice(2).join("");

      const numberTotal2 = numberFirst2 + "." + numberLast2;
      setTotalConvert(numberTotal2);
    }
  });

  return (
    <div className="order-DishesEdit lg:w-[800px] md:w-[90%] w-[90%] lg:h-[calc(100vh-60%)] md:h-[calc(100vh-60%)]  h-[calc(100vh-40%)] bg-white flex lg:flex-row md:flex-row flex-col m-auto fixed -top-[100%] left-[50%] -translate-x-[50%] rounded-[6px] ease-in duration-500 z-[9999] lg:overflow-hidden md:overflow-hidden">
      <div className="flex lg:flex-row md:flex-row flex-col overflow-y-scroll">
        <div
          onClick={handleDaHieu2}
          className="btn-exits absolute bg-[#c0142f] p-2 px-4 text-2xl text-white right-0 rounded-tr-md"
        >
          <i class="fa-solid fa-xmark"></i>
        </div>
        <div className="alert-cardEdit2 lg:w-[50%] md:w-[50%] w-[80%] absolute bg-[#f2f4f8] top-[50%] left-[50%] z-[99999] -translate-x-[50%] -translate-y-[50%] rounded-md hidden">
          <div
            onClick={handleDaHieu2}
            className="absolute bg-[#c0142f] py-2 px-4 text-2xl text-white right-0 rounded-tr-md z-10"
          >
            <i class="fa-solid fa-xmark"></i>
          </div>
          <h1 className="font-bold text-center mt-[60px]">Thông báo</h1>
          <h1 className="font-bold text-center mt-2">
            Cập nhật giỏ hàng thành công!
          </h1>
          <div className="flex justify-center items-center">
            <button
              onClick={handleDaHieu2}
              className="bg-[#e31837] text-white font-bold px-4 py-3 rounded mt-2 hover:bg-[#c0142f] mb-5"
            >
              Đã hiểu
            </button>
          </div>
        </div>
        <div className="alert-address lg:w-[50%] md:w-[50%] w-[80%] h-[30%] absolute bg-[#f2f4f8] top-[50%] left-[50%] z-[99999] -translate-x-[50%] -translate-y-[50%] rounded-md hidden">
          <div
            onClick={handleDaHieu2}
            className="absolute bg-[#c0142f] py-2 px-4 text-2xl text-white right-0 rounded-tr-md"
          >
            <i class="fa-solid fa-xmark"></i>
          </div>
          <h1 className="font-bold text-center mt-[60px]">Thông báo</h1>
          <h1 className="font-bold text-center mt-2">
            Vui lòng nhập địa chỉ để tiếp tục mua hàng{" "}
          </h1>
          <div className="flex justify-center items-center">
            <button
              onClick={handleDaHieu2}
              className="bg-[#e31837] text-white font-bold px-4 py-3 rounded mt-2 hover:bg-[#c0142f] mb-5"
            >
              Đã hiểu
            </button>
          </div>
        </div>
        {orderSideDishes.map((orderSide) => {
          if (orderSide.name === nameEditMonPhu) {
            return (
              <>
                <div className=" lg:w-[40%] md:w-[40%] w-[100%] lg:h-[100%] md:h-[100%] h-[30%]  rounded-l-lg lg:block md:block hidden">
                  <img
                    className="w-[100%] h-[100%] bg-no-repeat rounded-l-lg"
                    src={orderSide.imageOrder}
                    alt={orderSide.name}
                  />
                </div>
                <div className=" lg:w-[40%] md:w-[40%] w-[100%] lg:h-[100%] md:h-[100%] h-[30%]  rounded-l-lg lg:hidden md:hidden block">
                  <img
                    className="w-[100%] h-[100%] bg-no-repeat rounded-l-lg"
                    src={orderSide.imageMB}
                    alt={orderSide.name}
                  />
                </div>
                <div className="lg:w-[60%] md:w-[60%] w-[100%] h-[100%] flex flex-col">
                  <div className="h-[90%]  py-2 px-8 lg:overflow-y-scroll md:overflow-y-scroll">
                    <div>
                      <h1 className="text-[#0078ae] lg:text-4xl md:text-4xl text-4xl font-bold text-left lg:leading-[48px] md:leading-[48px] leading-[50px] tracking-[3px]">
                        {orderSide.name}
                      </h1>
                    </div>
                    <div className="mt-5">
                      <span className="text-[#858891] text-[14px] font-medium text-left">
                        {orderSide.description}
                      </span>
                    </div>
                    <div>
                      <hr className="solid border-b-[2px] w-[4rem] border-[#dfe4ea] my-10" />
                    </div>
                  </div>
                  <div className="lg:flex md:flex hidden items-center h-[30%] p-3 solid border-t-2 border-[#dee2e6] shadow-[0px_0px_16px_rgb(0,42,61,16%)]">
                    <div className="flex items-center">
                      <button
                        className="bg-[#dfe4ea] py-3 px-5 rounded-l-lg w-[50px] hover:bg-[#c8d1db] active:bg-[#c0cad6] active:border-[#c0cad6]"
                        onClick={handleMinus}
                      >
                        <i class="fa-solid fa-minus"></i>
                      </button>
                      <div className="bg-[#e9ecef] w-[54px] py-3 px-4 text-center">
                        {quantity}
                      </div>
                      <button
                        onClick={handlePlus}
                        className="bg-[#dfe4ea] py-3 px-5 rounded-r-lg w-[50px] hover:bg-[#c8d1db] active:bg-[#c0cad6] active:border-[#c0cad6]"
                      >
                        <i class="fa-solid fa-plus"></i>
                      </button>
                    </div>
                    <div className="ml-2">
                      <button
                        className="bg-[#e31837] w-[auto] rounded py-3 px-5 text-white font-bold hover:bg-[#c0142f]"
                        onClick={() => {
                          handleOrderEditDishes();
                        }}
                      >
                        Cập nhật sản phẩm <span>{totalConvert}.000₫</span>
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          }
        })}
      </div>
      <div className="flex items-center justify-center flex-col h-[50%] p-5 solid border-t-2 border-[#dee2e6] shadow-[0px_0px_16px_rgb(0,42,61,16%)] overflow-hidden lg:hidden md:hidden">
        <div className="flex items-center mb-2">
          <button
            className="bg-[#dfe4ea] py-3 px-5 rounded-l-lg w-[50px] hover:bg-[#c8d1db] active:bg-[#c0cad6] active:border-[#c0cad6]"
            onClick={handleMinus}
          >
            <i class="fa-solid fa-minus"></i>
          </button>
          <div className="bg-[#e9ecef] w-[54px] py-3 px-5 text-center">
            {quantity}
          </div>
          <button
            onClick={handlePlus}
            className="bg-[#dfe4ea] py-3 px-4 rounded-r-lg w-[50px] hover:bg-[#c8d1db] active:bg-[#c0cad6] active:border-[#c0cad6]"
          >
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
        <div className="ml-2">
          <button
            className="bg-[#e31837] w-[auto] rounded py-3 px-5 text-white font-bold hover:bg-[#c0142f]"
            onClick={() => {
              handleOrderEditDishes();
            }}
          >
            Cập nhật sản phẩm <span>{totalConvert}.000₫</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default memo(OrderEditDishes);
