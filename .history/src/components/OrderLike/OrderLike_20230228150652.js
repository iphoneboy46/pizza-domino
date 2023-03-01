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
      <div className="w-[100%] overflow-hidden">
        <div className="flex justify-between items-center w-[1000%]">
          {listOrderLikes.map((like) => {
            if (like.id <= 15) {
              return (
                <>
                  <div>
                    <img src={like.image} alt="" />
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
