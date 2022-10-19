import React, { useContext } from 'react';
import Context from '../../Store/Context';


function Giohang() {

  const { menuOrders, totalQuantity, handlePizzaEdit, handleDelete,totalOrders } =
  useContext(Context);

  return (
    <div className="w-[80%] m-auto mt-[100px]">
        <div>
          <h1>Giỏ hàng của bạn</h1>
        </div>
    </div>
  )
}

export default Giohang