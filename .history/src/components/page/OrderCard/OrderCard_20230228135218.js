import React, { useContext } from "react";
import Context from "../../Store/Context";
import "./OrderCard.css";
import { useEffect } from "react";
import { useState } from "react";

function OrderCard() {
  const {
    menuOrders,
    totalQuantity,
    handlePizzaEdit,
    handleDelete,
    totalOrders,
    handleSideDishesEdit,
  } = useContext(Context);

  console.log(totalOrders);

  const [totalConvert, setTotalConvert] = useState();

  useEffect(() => {
    let totalAfter = totalOrders;
    setTotalConvert(totalAfter);

    if (totalAfter > 1000) {
      const numberFirst = totalAfter.toFixed().split("").slice(0, 1);
      const numberLast = totalAfter.toFixed().split("").slice(1).join("");

      const numberTotal = numberFirst + "." + numberLast;
      setTotalConvert(numberTotal);
    } 
    if (totalAfter > 10000) {
     
      const numberFirst2 = totalAfter.toFixed().split("").slice(0, 2).join("");
      console.log(numberFirst2);
      const numberLast2 = totalAfter.toFixed().split("").slice(2).join("");

      const numberTotal2 = numberFirst2 + "." + numberLast2;
      setTotalConvert(numberTotal2);
    }
  });

  return (
    <div className="p-2">
      <div className="flex justify-between">
        <h1 className="font-bold text-xl">Đơn hàng của bạn</h1>
        <h1 className="font-bold text-xl">{totalQuantity} món</h1>
      </div>
      <div>
        <form action="">
          <input
            className="p-3 solid border-b-2 text-[#495057] font-semibold w-[70%] mt-5 rounded-l-lg focus:border-2  focus:border-[#80bdff] focus:outline-[0] focus:shadow-[0_0_1.2rem_rgb(0,123,255,25%)]"
            type="text"
            placeholder="Nhập mã E-voucher"
          />
          <button className="bg-[#0078ae] w-[30%] py-3 px-3 rounded-r-lg focus:border-2  focus:border-[#80bdff] focus:outline-[0] focus:shadow-[0_0_1.2rem_rgb(0,123,255,25%)]">
            <span className="text-sm text-white font-semibold">Áp dụng</span>
          </button>
        </form>
      </div>
      <div className="my-5 overflow-y-scroll h-[300px]">
        {menuOrders.map((menu) => {
          return (
            <div className="mb-3 w-[100%] overflow-hidden">
              <div className="flex justify-between">
                <div className="w-[8%]">
                  <span className="flex">{menu.quantity} x</span>
                </div>
                <div className="w-[60%]">
                  <span className="text-justify w-[50%] font-bold">
                    {menu.name}
                  </span>
                  <div className="flex flex-col justify-between text-[14px] text-justify w-[300px] font-bold text-[#717273]">
                    <span>{menu.base}</span>
                    <span>{menu.size}</span>
                    <span>{menu.border9}</span>
                    <span>{menu.more9}</span>
                    <span>{menu.border12}</span>
                    <span>{menu.more12}</span>
                  </div>
                  <div className="flex justify-start  py-2 cursor-pointer select-none">
                    {menu.base ? (
                      <span
                        onClick={() => {
                          handlePizzaEdit(menuOrders);
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
                        handleDelete(menu.id);
                      }}
                      className="text-[#0078ae] text-sm font-bold hover:text-[#004362]"
                    >
                      Xóa
                    </span>
                  </div>
                </div>
                <div className="w-[25%]">
                  {menu.base ? (
                    <span className="text-center font-bold">
                      {menu.totalP}.000 ₫
                    </span>
                  ) : (
                    <span className="text-center font-bold">
                      {menu.price * menu.quantity}.000 ₫
                    </span>
                  )}
                  <div className="w-[64px] h-[64px] rounded-xl">
                    <img
                      className="w-[100%] h-[100%] rounded-xl"
                      src={menu.image}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-end py-2 cursor-pointer select-none">
                <button className="btn-khuyenMai text-[#0078ae] text-center font-bold text-base hover:text-[#004362]">
                  Mua theo chương trình khuyến mãi
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <div className="flex items-center justify-between">
          <h1 className="text-[#6c757d] font-bold">Tổng</h1>
          <span className="font-bold">{totalConvert}.000 ₫</span>
        </div>
        <div className="flex items-center justify-between">
          <h1 className="text-[#6c757d] font-bold">Giảm K.Mãi</h1>
          <span></span>₫
        </div>
        <div className="flex items-center justify-between">
          <h1 className="text-[#6c757d] font-bold">Giảm Vouchers</h1>
          <span></span>₫
        </div>
        <div className="flex items-center justify-between">
          <h1 className="text-[#6c757d] font-bold">Phí giao hàng</h1>
          <span></span>₫
        </div>
      </div>
      <div className="width-[100%] bg-[#E31837] py-3 text-[white] mt-2 text-center flex justify-center items-center rounded-sm">
        <Link to="/cart" className="font-semibold mr-5">HOÀN TẤT ĐƠN HÀNG</Link>
        <span className="font-bold">{totalConvert}.000 ₫</span>
      </div>
    </div>
  );
}

export default OrderCard;
