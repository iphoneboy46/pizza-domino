import React, { useCallback, useEffect, useMemo } from "react";
import data from "../Data/Data";

function OrderLike() {
  const { pastas, chicken, dessert, drinks, sausage, bread, potato } = data;

  let listOrderLikes = [
    ...pastas,
    ...dessert,
    ...potato,
    ...sausage,
    ...bread,
    ...chicken,
    ...drinks,
  ];

  return (
    <div className="border-[1px] border-[#0078AE] w-[100%] rounded-md py-5 px-2">
      <h1 className="text-center text-xl font-bold">Có thể bạn sẽ thích</h1>
      <div className="list-order w-[100%]">
        <div className="list-items  flex justify-around items-center w-[900%]">
          {listOrderLikes.map((like) => {
            if (like.id <= 15) {
              return (
                <>
                  <div className="w-[250px] h-[200px]">
                    <img src={like.image} alt="" className="w-[100%] h-[100%]" />
                  </div>
                </>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default OrderLike;
