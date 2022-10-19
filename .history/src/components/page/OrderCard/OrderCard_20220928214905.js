import React, { useContext } from "react";
import Context from "../../Store/Context";

function OrderCard() {
  const { menuOrders, totalQuantity, handlePizzaEdit, handleDelete } =
    useContext(Context);

  return (
    <div className="p-2">
      <div className="flex justify-between">
        <h1 className="font-bold text-xl">Đơn hàng của bạn</h1>
        <h1 className="font-bold text-xl">{totalQuantity} món</h1>
      </div>
      <div>
        <form action="">
          <input
            className="p-3 solid border-b-2 text-[#495057] font-semibold w-[70%] mt-10 rounded-l-lg focus:border-2  focus:border-[#80bdff] focus:outline-[0] focus:shadow-[0_0_1.2rem_rgb(0,123,255,25%)]"
            type="text"
            placeholder="Nhập mã E-voucher"
          />
          <button className="bg-[#0078ae] w-[30%] py-3 px-3 rounded-r-lg focus:border-2  focus:border-[#80bdff] focus:outline-[0] focus:shadow-[0_0_1.2rem_rgb(0,123,255,25%)]">
            <span className="text-sm text-white font-semibold">Áp dụng</span>
          </button>
        </form>
      </div>
      <div className="my-5 overflow-y-scroll h-[250px]">
        {menuOrders.map((menu) => {
          return (
            <div className="mb-3">
              <div className="flex justify-between items-center font-bold text-[13px]">
                <span className="mr-2">{menu.quantity}</span>
                <span className="mr-2">x</span>
                <span className="text-justify w-[50%]">{menu.name}</span>
                <span>-</span>
                <span className="text-justify">
                  {menu.price * menu.quantity}.000 ₫
                </span>
              </div>
              <div className="flex items-center justify-between mt-3">
                <div className="w-[50px] h-[50px]"></div>
                <div className="flex flex-col justify-between text-[14px] text-justify w-[300px] ml-12 font-bold text-[#717273]">
                  <span>{menu.base}</span>
                  <span>{menu.size}</span>
                  <span>{menu.border9}</span>
                  <span>{menu.more9}</span>
                  <span>{menu.border12}</span>
                  <span>{menu.more12}</span>
                </div>
                <div className="w-[64px] h-[100%] rounded-xl">
                  <img
                    className="w-[100%] h-[100%] rounded-xl"
                    src={menu.image}
                    alt=""
                  />
                </div>
              </div>
              <div className="flex justify-center mr-[160px] py-2 cursor-pointer select-none">
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
              <div className="flex justify-center ml-[0px] py-2 cursor-pointer select-none">
                <button className="btn-khuyenMai text-center">
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
          <span></span>₫
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
    </div>
  );
}

export default OrderCard;
