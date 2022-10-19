import React from "react";

function NoneOrder() {
  return (
    <div>
      <img
        className="w-[233px] h-[233px] m-auto"
        src="https://dominos.vn/img/illustration/empty-cart.svg"
        alt=""
      />
      <h1 className="font-bold text-center p-4">
        Giỏ hàng chưa có sản phẩm. Xin mời bạn mua hàng
      </h1>
    </div>
  );
}

export default NoneOrder;
