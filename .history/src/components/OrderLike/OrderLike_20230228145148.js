import React, { useCallback, useEffect, useMemo } from "react";
import data from "../Data/Data";

function OrderLike() {
  const { pastas, chicken, dessert, drinks, sausage, bread, potato } = data;
  let chickenFil = useMemo(()=>{
        return chicken.map((ck)=>{
            if(ck.id <= 3){
                return ck
            }
        })
  },[]) 

  let drinkFill = useMemo(()=>{
    return drinks.filter((dk)=>{
        if(dk.id <= 5){
            return dk
        }
    })
  },[])

  const listOrderLikes = [
    ...pastas,
    ...dessert,
    ...potato,
    ...sausage,
    ...bread,
    ...chickenFil,
    ...drinkFill,
  ];


  console.log(listOrderLikes);

  


  return (
    <div className="border-[1px] border-[#0078AE] w-[100%] rounded-md py-5 px-2">
      <h1 className="text-center text-xl font-bold">Có thể bạn sẽ thích</h1>
     <div>
          <div className="flex justify-between items-center">
            {
                listOrderLikes.map((like)=>{
                    return(
                        <>
                            <div>
                                <img src="" alt="" />
                            </div>
                        </>
                    )
                })
                
            }

                
            
          </div>
     </div>
    </div>
  );
}

export default OrderLike;
