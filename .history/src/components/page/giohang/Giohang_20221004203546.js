import React, { useCallback, useContext, useEffect, useState } from "react";
import Context from "../../Store/Context";
import OrderEdit from "../OrderEdit/OrderEdit";
import "./Giohang.css";

function Giohang() {
  const {
    menuOrders,
    setMenuOrders,
    orderPizza,
    totalQuantity,
    handlePizzaEdit,
    handleDelete,
    totalOrders,
    quantity,
    setQuantity,
  } = useContext(Context);
  

  useEffect(() => {
    menuOrders.map((menuOrder) => {
     return setQPlus(menuOrder.quantity * menuOrder.price);
    });
  }, );

  useEffect(() => {
    menuOrders.map((menuOrder) => {
    return setQMinus(menuOrder.price);
    });
  }, []);

  const [qPlus, setQPlus] = useState(0);
  const [qMinus, setQMinus] = useState(0);

  console.log(qPlus);



  const handlePlus = (id) => {
    setQuantity(quantity + 1);
    console.log(id);
    const menuName = menuOrders.find((menuOrder) => {
      return menuOrder.id === id;
    });
    if (menuName) {
      setMenuOrders(
        menuOrders.map((menuOrder) => {
          return menuOrder.id === id
            ? {
                ...menuOrder,
                quantity: menuOrder.quantity = quantity,
                price: menuOrder.price * menuOrder.quantity,
              }
            : menuOrder;
        })
      );
    }
  };

  const handleMinus = (id) => {
    if (quantity <= 1) {
      setQuantity(quantity);
    } else {
      setQuantity(quantity - 1);
    }

    const menuName = menuOrders.find((menuOrder) => {
      return menuOrder.id === id;
    });
    if (menuName) {
      setMenuOrders(
        menuOrders.map((menuOrder) => {
          if (menuOrder.quantity <= 1) {
            return { ...menuOrder, quantity: (menuOrder.quantity = 1) };
          } else {
            return menuOrder.id === id
              ? {
                  ...menuOrder,
                  quantity: menuOrder.quantity - 1,
                  total: menuOrder.total - menuOrder.price
                }
              : menuOrder;
          }
        })
      );
    }
  };

  return (
    <div className="w-[80%] m-auto pt-[100px] h-[100vh]">
      <div className="content"></div>
      <OrderEdit />
      <div className="mb-5">
        <h1 className="font-bold">Giỏ hàng của bạn</h1>
      </div>
      <div className="mb-5 h-[60%] lg:overflow-y-scroll md:overflow-y-scroll overflow-y-scroll">
        {menuOrders.map((menu) => {
          return (
            <div className="lg:flex md:flex lg:justify-between md:justify-between lg:items-center md:items-center mb-5 lg:flex-row md:flex-row lg:flex-nowrap md:flex-nowrap flex flex-wrap">
              <div className="lg:w-[20%] lg:h-[20%] md:w-[20%] md:h-[20%] lg:mr-[50px] md:mr-[50px] w-[50%] h-[100%] mr-5">
                <img
                  className="w-[100%] h-[100%] rounded-xl"
                  src={menu.image}
                  alt={menu.name}
                />
              </div>
              <div className="lg:w-[40%] md:w-[40%] w-[40%]">
                <h1 className="font-bold">{menu.name}</h1>
                <p className="font-bold text-[#717273] my-1">{menu.size}</p>
                <p className="font-bold text-[#717273] my-1">{menu.base}</p>
                <p className="font-bold text-[#717273] my-1">{menu.border9}</p>
                <p className="font-bold text-[#717273] my-1">{menu.border12}</p>
                <p className="font-bold text-[#717273] my-1">{menu.more9}</p>
                <p className="font-bold text-[#717273] my-1">{menu.more12}</p>
                <div className="flex justify-start py-3 cursor-pointer select-none">
                  <span
                    onClick={() => {
                      handlePizzaEdit(menuOrders);
                    }}
                    className="mr-5  text-[#0078ae] text-sm font-bold hover:text-[#004362]"
                  >
                    Điều chỉnh
                  </span>
                  <span
                    onClick={() => {
                      handleDelete(menu.id);
                    }}
                    className="text-[#0078ae] text-sm font-bold hover:text-[#004362]"
                  >
                    Xóa
                  </span>
                </div>
              </div>
              <div className="lg:w-[40%] md:w-[40%] w-[100%] ">
                <div className="flex justify-between items-start mb-[40px]">
                  <div className="w-[100%]">
                    <p className="font-bold">
                      {menu.total}.000 ₫
                    </p>
                  </div>
                  <div className="flex items-center">
                    <button
                      className="bg-[#dfe4ea] py-3 px-4 rounded-l-lg w-[50px] hover:bg-[#c8d1db] active:bg-[#c0cad6] active:border-[#c0cad6]"
                      onClick={() => {
                        handleMinus(menu.id);
                      }}
                    >
                      <i class="fa-solid fa-minus"></i>
                    </button>
                    <div className="bg-[#e9ecef] w-[54px] py-3 px-4 text-center">
                      {menu.quantity}
                    </div>
                    <button className="bg-[#dfe4ea] py-3 px-4 rounded-r-lg w-[50px] hover:bg-[#c8d1db] active:bg-[#c0cad6] active:border-[#c0cad6]">
                      <i
                        class="fa-solid fa-plus"
                        onClick={() => {
                          handlePlus(menu.id);
                        }}
                      ></i>
                    </button>
                  </div>
                </div>
                <div className="flex justify-end cursor-pointer select-none w-[100%] mb-2 p-2">
                  <button className="w-[100%] btn-khuyenMai2 text-[#0078ae] text-center font-bold lg:text-base md:text-sm hover:text-[#004362]">
                    Mua theo chương trình khuyến mãi
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col items-end justify-between">
        <div className="flex items-center justify-between lg:w-[40%] md:w-[40%] w-[100%]">
          <h1 className="text-[#6c757d] font-bold">Tổng</h1>
          {<span className="font-bold">{totalOrders}.000 ₫</span>}
        </div>
        <div className="flex items-center justify-between lg:w-[40%] md:w-[40%] w-[100%]">
          <h1 className="text-[#6c757d] font-bold">Giảm K.Mãi</h1>
          <span className="text-[red]">₫</span>
        </div>
        <div className="flex items-center justify-between lg:w-[40%] md:w-[40%] w-[100%]">
          <h1 className="text-[#6c757d] font-bold">Giảm Vouchers</h1>
          <span className="text-[red]">₫</span>
        </div>
        <div className="flex items-center justify-between lg:w-[40%] md:w-[40%] w-[100%]">
          <h1 className="text-[#6c757d] font-bold">Phí giao hàng</h1>
          <span className="text-[red]">₫</span>
        </div>
        <div className="bg-[red] lg:w-[40%] md:w-[40%] w-[100%] text-center mt-5 font-bold text-[white] p-3 cursor-pointer">
          <span> Thanh toán {totalOrders}.000₫</span>
        </div>
      </div>
    </div>
  );
}

export default Giohang;
