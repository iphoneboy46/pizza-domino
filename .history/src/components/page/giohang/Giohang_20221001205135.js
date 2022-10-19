import React, { useContext } from "react";
import Context from "../../Store/Context";

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
    <div className="w-[80%] m-auto pt-[100px]">
      <div>
        <h1 className="font-bold">Giỏ hàng của bạn</h1>
      </div>
      <div className="flex justify-between items-center">
        {menuOrders.map((menu) => {
          return (
            <>
              <div className="w-[20%] h-[20%] mr-[10px]">
                <img
                  className="w-[100%] h-[100%] rounded-xl"
                  src={menu.image}
                  alt={menu.name}
                />
              </div>
              <div className="w-[60%]">
                <h1 className="font-bold">{menu.name}</h1>
                <p className="font-bold text-[#717273] my-3">{menu.size}</p>
                <p className="font-bold text-[#717273] ">{menu.base}</p>
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
              <div className="w-[20%]">
                <div className="flex justify-between items-start">
                  <div className="w-[100%]">
                    <p className="font-bold">{totalOrders}.000 ₫</p>
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
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Giohang;
