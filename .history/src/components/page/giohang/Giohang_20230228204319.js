import React, { useCallback, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Login from "../Login/Login";
import Context from "../../Store/Context";
import OrderEdit from "../OrderEdit/OrderEdit";
import OrderEditDishes from "../OrderEditDishes/OrderEditDishes";
import "./Giohang.css";
import OrderLike from "../../OrderLike/OrderLike";

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
    handleSideDishesEdit,
  } = useContext(Context);

  setQuantity(quantity);

  const handlePlus = (name) => {
    const menuName = menuOrders.find((menuOrder) => {
      return menuOrder.name === name;
    });

    if (menuName) {
      setMenuOrders(
        menuOrders.map((menuOrder) => {
          return menuOrder.name === name
            ? {
                ...menuOrder,
                quantity: (menuOrder.quantity = menuOrder.quantity + 1),
                totalP: menuOrder.price * menuOrder.quantity,
              }
            : menuOrder;
        })
      );
    }
  };

  useEffect(() => {
    document.documentElement.scrollTop = document.body.scrollTop = 0;
  }, []);

  const handleMinus = (name) => {
    const menuName = menuOrders.find((menuOrder) => {
      return menuOrder.name === name;
    });
    if (menuName) {
      setMenuOrders(
        menuOrders.map((menuOrder) => {
          if (menuOrder.quantity <= 1) {
            return { ...menuOrder, quantity: (menuOrder.quantity = 1) };
          } else {
            return menuOrder.name === name
              ? {
                  ...menuOrder,
                  quantity: menuOrder.quantity - 1,
                  totalP: menuOrder.totalP - menuOrder.price,
                }
              : menuOrder;
          }
        })
      );
    }
  };

  const [totalConvertGioHang, setTotalConvertGioHang] = useState();

  useEffect(() => {
    setTotalConvertGioHang(totalOrders);
    if (totalOrders > 1000) {
      const numberFirst = totalOrders.toFixed().split("").slice(0, 1);
      const numberLast = totalOrders.toFixed().split("").slice(1).join("");
      const totalNumber = numberFirst + "." + numberLast;
      setTotalConvertGioHang(totalNumber);
    }

    if (totalOrders > 10000) {
      const numberFirst = totalOrders.toFixed().split("").slice(0, 2).join("");
      const numberLast = totalOrders.toFixed().split("").slice(2).join("");
      const totalNumber = numberFirst + "." + numberLast;
      setTotalConvertGioHang(totalNumber);
    }
  });

  return (
    <div className="lg:w-[50%] md:w-[80%] w-[100%] m-auto pt-[100px] h-[auto] p-2">
       <div className="border-2 border-[#54bb10] w-[350px] py-2 px-1 text-center font-bold text-[#54bb10] bg-white rounded-md fixed left-[50%]">
      <i class="fa-solid fa-check"></i> Sản phẩm đã được thêm vào giỏ hàng !
     </div>  
      <div className="content"></div>
      <Login />
      <OrderEdit />
      <OrderEditDishes />
      {menuOrders.length > 0 ? (
        <>
          <div className="mb-5 flex justify-between ">
            <h1 className="font-bold">Giỏ hàng của bạn</h1>
            <span className="font-bold">{totalQuantity} món</span>
          </div>
          <div className="mb-5 h-[60%] lg:overflow-y-scroll md:overflow-y-scroll overflow-y-scroll border-solid ">
            {menuOrders.map((menu) => {
              return (
                <div className="lg:flex md:flex lg:justify-between lg:items-start md:justify-between md:items-start mb-5 lg:flex-row md:flex-row lg:flex-nowrap md:flex-nowrap flex flex-wrap border-b-[1px]  border-[#DFE4EA]">
                  <div className="lg:w-[25%] lg:h-[25%] md:w-[20%] md:h-[20%] lg:mr-[50px] md:mr-[20px] w-[30%] h-[100%] mr-5">
                    <img
                      className="w-[100%] h-[100%] rounded-xl"
                      src={menu.image}
                      alt={menu.name}
                    />
                  </div>
                  <div className="lg:w-[40%] md:w-[40%] w-[60%]">
                    <h1 className="font-bold md:text-sm">{menu.name}</h1>
                    <p className="font-bold text-[#717273] my-1 text-sm">
                      {menu.size}
                    </p>
                    <p className="font-bold text-[#717273] my-1 text-sm">
                      {menu.base}
                    </p>
                    <p className="font-bold text-[#717273] my-1">
                      {menu.border9}
                    </p>
                    <p className="font-bold text-[#717273] my-1 text-sm">
                      {menu.border12}
                    </p>
                    <p className="font-bold text-[#717273] my-1 text-sm">
                      {menu.more9}
                    </p>
                    <p className="font-bold text-[#717273] my-1 text-sm">
                      {menu.more12}
                    </p>
                    <div className="flex justify-start py-3 cursor-pointer select-none">
                      {menu.base ? (
                        <span
                          onClick={() => {
                            handlePizzaEdit();
                          }}
                          className="mr-5  text-[#0078ae] text-sm font-bold hover:text-[#004362]"
                        >
                          Điều chỉnh
                        </span>
                      ) : (
                        <span
                          onClick={() => {
                            handleSideDishesEdit();
                          }}
                          className="mr-5  text-[#0078ae] text-sm font-bold hover:text-[#004362]"
                        >
                          Điều chỉnh
                        </span>
                      )}
                      <span
                        onClick={() => {
                          handleDelete(menu.name);
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
                        <p className="font-bold md:text-sm">
                          {menu.totalP > 1000
                            ? menu.totalP.toFixed().split("").slice(0, 1) +
                              "." +
                              menu.totalP
                                .toFixed()
                                .split("")
                                .slice(1)
                                .join("") +
                              ".000 ₫"
                            : menu.totalP + ".000 ₫"}
                        </p>
                      </div>  
                      <div className="flex items-center">
                        <button
                          className="bg-[#dfe4ea] lg:w-[50px] md:w-[40px] w-[40px] py-4 flex justify-center items-center rounded-l-lg  hover:bg-[#c8d1db] active:bg-[#c0cad6] active:border-[#c0cad6]"
                          onClick={() => {
                            handleMinus(menu.name);
                          }}
                        >
                          <i class="fa-solid fa-minus"></i>
                        </button>
                        <div className="bg-[#e9ecef] flex justify-center items-center w-[50px] py-3 px-4 text-center">
                          {menu.quantity}
                        </div>
                        <button
                          onClick={() => {
                            handlePlus(menu.name);
                          }}
                          className="bg-[#dfe4ea] py-4  rounded-r-lg lg:w-[50px] md:w-[40px] w-[40px] hover:bg-[#c8d1db] active:bg-[#c0cad6] active:border-[#c0cad6] flex justify-center items-center"
                        >
                          <i class="fa-solid fa-plus"></i>
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
          <div className="flex flex-col items-end justify-between lg:relative md:relative fixed bottom-0 w-[100%] bg-white left-0 right-0 z-10 p-3">
            <div className="flex items-center justify-between lg:w-[40%] md:w-[100%] w-[100%]">
              <h1 className="text-[#6c757d] font-bold">Tổng</h1>
              {<span className="font-bold">{totalConvertGioHang}.000 ₫</span>}
            </div>
            <div className="flex items-center justify-between lg:w-[40%] md:w-[100%] w-[100%]">
              <h1 className="text-[#6c757d] font-bold">Giảm K.Mãi</h1>
              <span className="text-[red]">₫</span>
            </div>
            <div className="flex items-center justify-between lg:w-[40%] md:w-[100%] w-[100%]">
              <h1 className="text-[#6c757d] font-bold">Giảm Vouchers</h1>
              <span className="text-[red]">₫</span>
            </div>
            <div className="flex items-center justify-between lg:w-[40%] md:w-[100%] w-[100%]">
              <h1 className="text-[#6c757d] font-bold">Phí giao hàng</h1>
              <span className="text-[red]">₫</span>
            </div>
            <div className="bg-[red] lg:w-[40%] md:w-[100%] w-[100%] text-center mt-5 font-bold text-[white] p-3 cursor-pointer ">
              <span> Thanh toán {totalConvertGioHang}.000₫</span>
            </div>
          </div>
          <div className="w-[100%] my-5">
            <OrderLike />
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center">
          <img
            className="lg:w-[40%] md:w[60%] w-[100%] h-[40%] m-auto"
            src="https://dominos.vn/img/illustration/empty-cart.svg"
            alt=""
          />
          <h1 className="font-bold text-center p-4 lg:w-[80%] md:w-[80%] w-[100%] m-auto lg:text-lg">
            Hiện tại bạn chưa có sản phẩm nào trong giỏ hàng. Hãy dạo một vòng
            Thực đơn để chọn sản phẩm yêu thích nhé, Domino's Pizza có nhiều món
            ngon lắm!
          </h1>
          <Link
            className="lg:w-[25%] md:w[30%] w-[60%]  bg-[#e31837] p-4 m-auto lg:mb-[5%] text-center text-white font-bold rounded-md"
            to="/thucdon"
          >
            Tiếp tục chọn món
          </Link>
        </div>
      )}
    </div>
  );
}

export default Giohang;
