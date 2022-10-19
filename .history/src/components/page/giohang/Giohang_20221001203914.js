import React, { useContext } from 'react';
import Context from '../../Store/Context';


function Giohang() {

  const { menuOrders, totalQuantity, handlePizzaEdit, handleDelete,totalOrders } =
  useContext(Context);

  return (
    <div className="w-[80%] m-auto pt-[100px]">
        <div>
          <h1 className="font-bold">Giỏ hàng của bạn</h1>
        </div>
        <div className="flex justify-between items-center">
         {menuOrders.map((menu)=>{
          return (
            <>
              <div className="w-[20%] h-[20%]">
                <img className="w-[100%] h-[100%] rounded-xl" src={menu.image} alt={menu.name} />
              </div>
              <div>
                
              </div>
            </>
          )
         })}
        </div>
    </div>
  )
}

export default Giohang