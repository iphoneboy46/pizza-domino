import React,{useContext} from 'react';
import Context from '../../Store/Context';


function ExtraDishes() {

  const {handleSideDishes,chicken,sausage,bread,potato} = useContext(Context);

  return (
    <div className="bg-[#f2f4f8] h-[800px] lg:pb-[250px] md:pb-[50px] overflow-y-scroll">
    <div className="premium">
      <div className="flex justify-center relative">
        <hr className="w-[100px] absolute top-[50%] left-[35%] text-[#e7eaef]" />
        <h4 className="text-center text-xl uppercase my-5 font-extrabold">
          <span>Chicken</span>
        </h4>
        <hr className="w-[100px] absolute top-[50%] right-[35%] text-[#e7eaef]" />
      </div>
      <div className="grid grid-cols-4 auto-cols-fr gap-[30px] my-5  px-[100px]">
        {chicken.map((chicken, index) => {
          return (
            <div
              key={index}
              className="rounded-[10px] border-style: solid border-2 flex flex-col border-[#dfe4ea] bg-white"
            >
              <div className="w-[100%] h-[auto] mb-4 overflow-hidden rounded-t-lg">
                <img
                  className="w-[100%] h-[100%] rounded-t-lg ease-in duration-150 hover:scale-110"
                  src={chicken.image}
                  alt=""
                />
              </div>
              <div className="p-2 h-[80px] text-[#0078ae] text-center font-semibold">
                <button
                  onClick={() => {
                    handleSideDishes(chicken);
                  }}
                  className="hover:underline"
                >
                  {chicken.name}
                </button>
              </div>
              <div className="text-center font-semibold text-[#25282d] pb-2">
                <span>{chicken.price}.000 ₫</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center relative">
        <hr className="w-[100px] absolute top-[50%] left-[35%] text-[#e7eaef]" />
        <h4 className="text-center text-xl uppercase my-5 font-extrabold">
          <span>sausage</span>
        </h4>
        <hr className="w-[100px] absolute top-[50%] right-[35%] text-[#e7eaef]" />
      </div>
      <div className="grid grid-cols-4 auto-cols-fr gap-[30px] my-5  px-[100px]">
        {sausage.map((sausage, index) => {
          return (
            <div
              key={index}
              className="rounded-[10px] border-style: solid border-2 flex flex-col border-[#dfe4ea] bg-white"
            >
              <div className="w-[100%] h-[auto] mb-4 overflow-hidden rounded-t-lg">
                <img
                  className="w-[100%] h-[100%]  rounded-t-lg ease-in duration-150 hover:scale-110"
                  src={sausage.image}
                  alt=""
                />
              </div>
              <div className="p-2 h-[80px] text-[#0078ae] text-center font-semibold">
                <button
                  onClick={() => {
                    handleSideDishes(sausage);
                  }}
                  className="hover:underline"
                >
                  {sausage.name}
                </button>
              </div>
              <div className="text-center font-semibold text-[#25282d] pb-2">
                <span>{sausage.price}.000 ₫</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center relative">
        <hr className="w-[100px] absolute top-[50%] left-[35%] text-[#e7eaef]" />
        <h4 className="text-center text-xl uppercase my-5 font-extrabold">
          <span>bread</span>
        </h4>
        <hr className="w-[100px] absolute top-[50%] right-[35%] text-[#e7eaef]" />
      </div>
      <div className="grid grid-cols-4 auto-cols-fr gap-[30px] my-5  px-[100px]">
        {bread.map((bread, index) => {
          return (
            <div
              key={index}
              className="rounded-[10px] border-style: solid border-2 flex flex-col border-[#dfe4ea] bg-white"
            >
              <div className="w-[100%] h-[auto] mb-4 overflow-hidden rounded-t-lg">
                <img
                  className="w-[100%] h-[100%]  rounded-t-lg ease-in duration-150 hover:scale-110"
                  src={bread.image}
                  alt=""
                />
              </div>
              <div className="p-2 h-[80px] text-[#0078ae] text-center font-semibold">
                <button
                  onClick={() => {
                    handleSideDishes(bread);
                  }}
                  className="hover:underline"
                >
                  {bread.name}
                </button>
              </div>
              <div className="text-center font-semibold text-[#25282d] pb-2">
                <span>{bread.price}.000 ₫</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center relative">
        <hr className="w-[100px] absolute top-[50%] left-[35%] text-[#e7eaef]" />
        <h4 className="text-center text-xl uppercase my-5 font-extrabold">
          <span>potato</span>
        </h4>
        <hr className="w-[100px] absolute top-[50%] right-[35%] text-[#e7eaef]" />
      </div>
      <div className="grid grid-cols-4 auto-cols-fr gap-[30px] my-5  px-[100px]">
        {potato.map((potato, index) => {
          return (
            <div
              key={index}
              className="rounded-[10px] border-style: solid border-2 flex flex-col border-[#dfe4ea] bg-white"
            >
              <div className="w-[100%] h-[auto] mb-4 overflow-hidden rounded-t-lg">
                <img
                  className="w-[100%] h-[100%]  rounded-t-lg ease-in duration-150 hover:scale-110"
                  src={potato.image}
                  alt=""
                />
              </div>
              <div className="p-2 h-[80px] text-[#0078ae] text-center font-semibold">
                <button
                  onClick={() => {
                    handleSideDishes(potato);
                  }}
                  className="hover:underline"
                >
                  {potato.name}
                </button>
              </div>
              <div className="text-center font-semibold text-[#25282d] pb-2">
                <span>{potato.price}.000 ₫</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
  )
}

export default ExtraDishes