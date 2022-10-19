import React, { useContext } from "react";
import Context from "../../Store/Context";
import OrderEdit from "../OrderEdit/OrderEdit";
import "./Giohang.css";


function Giohang() {
  const {
    menuOrders,
    totalQuantity,
    handlePizzaEdit,
    handleDelete,
    totalOrders,
    quantity,
    setQuantity,
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

  return (
    <div className="w-[80%] m-auto pt-[100px] h-[100vh]">
     <div className="content"></div>
     <OrderEdit />
      <div className="mb-5">
        <h1 className="font-bold">Giỏ hàng của bạn</h1>
      </div>
      <div className="mb-5">
        {menuOrders.map((menu) => {
          return (         
            <div className="flex justify-between items-center mb-5">
              <div className="w-[20%] h-[20%] mr-[50px]">
                <img
                  className="w-[100%] h-[100%] rounded-xl"
                  src={menu.image}
                  alt={menu.name}
                />
              </div>
              <div className="w-[40%]">
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
              <div className="w-[40%]">
                <div className="flex justify-between items-start mb-[40px]">
                  <div className="w-[100%]">
                    <p className="font-bold">{menu.price * quantity}.000 ₫</p>
                  </div>
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
                </div>
                <div className="flex justify-end cursor-pointer select-none w-[100%] mb-2">
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
        <div className="flex items-center justify-between w-[40%]">
          <h1 className="text-[#6c757d] font-bold">Tổng</h1>
          <span className="font-bold">{totalOrders}.000 ₫</span>
        </div>
        <div className="flex items-center justify-between w-[40%]">
          <h1 className="text-[#6c757d] font-bold">Giảm K.Mãi</h1>
          <span className="text-[red]">₫</span>
        </div>
        <div className="flex items-center justify-between w-[40%]">
          <h1 className="text-[#6c757d] font-bold">Giảm Vouchers</h1>
          <span className="text-[red]">₫</span>
        </div>
        <div className="flex items-center justify-between w-[40%]">
          <h1 className="text-[#6c757d] font-bold">Phí giao hàng</h1>
          <span className="text-[red]">₫</span>
        </div>
      </div>
    </div>
  );
}

export default Giohang;
