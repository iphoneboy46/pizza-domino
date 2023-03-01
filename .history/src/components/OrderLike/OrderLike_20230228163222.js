import React, { useCallback, useContext, useEffect, useMemo } from "react";
import data from "../Data/Data";
import Context from "../Store/Context";
function OrderLike() {
  const {menuOrders,setMenuOrders} = useContext(Context)  
  const { pastas, chicken, dessert, drinks, sausage, bread, potato } = data;

  console.log(menuOrders);
  let listOrderLikes = [
    ...pastas,
    ...dessert,
    ...potato,
    ...sausage,
    ...bread,
    ...chicken,
    ...drinks,
  ];

const handleNext = () =>{
    const lists = document.getElementById("list-order");
    const items = document.querySelectorAll(".list-items");
    lists.appendChild(items[0])
   
}

const handlePrev = () =>{
    const lists = document.getElementById("list-order");
    const items = document.querySelectorAll(".list-items");
    lists.prepend(items[items.length-1])
   
}


const handleAddCart = (data,name) =>{
    const itemName = menuOrders.find((menu)=>{
        return menu.name === name;
    })
    setMenuOrders(
       [...menuOrders,{...data, quantity:1}]
    )
}



  return (
    <div className="border-[1px] border-[#0078AE] w-[100%] rounded-md py-5 px-2 relative overflow-hidden">
      <h1 className="text-center text-xl font-bold mb-5">Có thể bạn sẽ thích</h1>
      <div className="w-[900px] mb-3 overflow-hidden">
        <div id="list-order" className=" flex justify-around items-center w-[900%]">
          {listOrderLikes.map((like) => {
            if (like.id <= 15) {
              return (
                <div className="list-items flex justify-center items-center flex-col">
                  <div className="w-[195px] h-[130px] rounded-md mb-3">
                    <img src={like.image} alt="" className="w-[100%] h-[100%] rounded-md" />
                  </div>
                   <h1 className="text-center font-bold text-[#1483B4] w-[195px]">{like.name}</h1> 
                   <h4  className="text-center font-bold text-[#919292] text-sm mb-3">
                    {like.price}.000 ₫
                   </h4>
                   <div onClick={()=>{
                    handleAddCart(like,like.name)
                   }} className="border-[1px] border-[#E31837] w-[200px] m-auto p-1 font-bold text-[#E31837] text-center cursor-pointer hover:bg-[#E31837] hover:text-white duration-150 ease-linear">
                   Thêm vào giỏ hàng
                   </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    <div onClick={handlePrev} className="w-[35px] h-[35px] bg-[#EEEEEE] flex justify-center items-center rounded-2xl absolute top-[50%] left-2">
    <i className="fa-solid fa-angle-left text-2xl"></i>
    </div>
    <div onClick={handleNext} className="w-[35px] h-[35px] bg-[#EEEEEE] flex justify-center items-center rounded-2xl absolute top-[50%] right-2">
    <i className="fa-solid fa-angle-right text-2xl"></i>
    </div>
    </div>
  );
}

export default OrderLike;
