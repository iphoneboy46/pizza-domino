import React, { useContext } from "react";
import Context from "../../Store/Context";

function Drink() {
  const { handleSideDishes, drinks } = useContext(Context);
  return (
    <div className="bg-[#f2f4f8] h-[800px] pb-[100px] overflow-y-scroll">
      <div className="premium">
        <div className="flex justify-center relative">
          <hr className="w-[100px] absolute top-[50%] left-[35%] text-[#e7eaef]" />
          <h4 className="text-center text-xl uppercase my-5 font-extrabold">
            <span>drink</span>
          </h4>
          <hr className="w-[100px] absolute top-[50%] right-[35%] text-[#e7eaef]" />
        </div>
        <div className="grid grid-cols-4 auto-cols-fr gap-[30px] my-5  px-[100px]">
          {drinks.map((drink, index) => {
            return (
              <div
                key={index}
                className="rounded-[10px] border-style: solid border-2 flex flex-col border-[#dfe4ea] bg-white"
              >
                <div className="w-[100%] h-[auto] mb-4 overflow-hidden rounded-t-lg">
                  <img
                    className="w-[100%] h-[100%] rounded-t-lg ease-in duration-150 hover:scale-110"
                    src={drink.image}
                    alt=""
                  />
                </div>
                <div className="p-2 h-[60px] text-[#0078ae] text-center font-semibold">
                  <button
                    onClick={() => {
                      handleSideDishes(drink);
                    }}
                    className="hover:underline"
                  >
                    {drink.name}
                  </button>
                </div>
                <div className="text-center font-semibold text-[#25282d] pb-2">
                  <span>{drink.price}.000 ₫</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Drink;
