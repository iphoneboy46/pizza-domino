import React, { useContext, useEffect, useState } from "react";
import Context from "../../Store/Context";
import "./Pizza.css";

function Pizza() {
  const { pizzaPremium, handlePizza, pizzaFavorite, pizzaSignature } =
    useContext(Context);

  const [choose, setChoose] = useState(1);

  const handleChoose = (index) => {
    console.log(index);
    setChoose(index);
  };

  const [items1, setItems1] = useState(pizzaPremium);
  const [items2, setItems2] = useState(pizzaFavorite);
  const [items3, setItems3] = useState(pizzaSignature);
  console.log(items2);

  useEffect(() => {
    const favorite = document.querySelector(".favorite");
    const signature = document.querySelector(".signature");
    const premium = document.querySelector(".premium");

    if (items2.length === 0) {
      favorite.style.display = "none";
    } else {
      favorite.style.display = "block";
    }

    if (items1.length === 0) {
      premium.style.display = "none";
    } else {
      premium.style.display = "block";
    }

    if (items3.length === 0) {
      signature.style.display = "none";
    } else {
      signature.style.display = "block";
    }
  });

  // filter seafood
  const filterItemsSeafood = (seafood) => {
    const seafood1 = pizzaPremium.filter((pizza) => {
      return pizza.seafood === seafood;
    });

    const seafood2 = pizzaFavorite.filter((pizza) => {
      return pizza.seafood === seafood;
    });

    const seafood3 = pizzaSignature.filter((pizza) => {
      return pizza.seafood === seafood;
    });

    setItems1(seafood1);
    setItems2(seafood2);
    setItems3(seafood3);
  };

  // Filter beef
  const filterItemsBeef = (beef) => {
    const beef1 = pizzaPremium.filter((pizza) => {
      return pizza.beef === beef;
    });

    const beef2 = pizzaFavorite.filter((pizza) => {
      return pizza.beef === beef;
    });

    const beef3 = pizzaSignature.filter((pizza) => {
      return pizza.beef === beef;
    });

    setItems1(beef1);
    setItems2(beef2);
    setItems3(beef3);
  };

  // Filter chicken
  const filterItemsChicken = (chicken) => {
    const chicken1 = pizzaPremium.filter((pizza) => {
      return pizza.chicken === chicken;
    });
    const chicken2 = pizzaFavorite.filter((pizza) => {
      return pizza.chicken === chicken;
    });
    const chicken3 = pizzaSignature.filter((pizza) => {
      return pizza.chicken === chicken;
    });
    setItems1(chicken1);
    setItems2(chicken2);
    setItems3(chicken3);
  };

  // Filter pig
  const filterItemsPig = (pig) => {
    const pig1 = pizzaPremium.filter((pizza) => {
      return pizza.pig === pig;
    });
    const pig2 = pizzaFavorite.filter((pizza) => {
      return pizza.pig === pig;
    });
    const pig3 = pizzaSignature.filter((pizza) => {
      return pizza.pig === pig;
    });
    setItems1(pig1);
    setItems2(pig2);
    setItems3(pig3);
  };

  // Filter pig
  const filterItemsVegetarian = (vegetarian) => {
    const vegetarian1 = pizzaPremium.filter((pizza) => {
      return pizza.vegetarian === vegetarian;
    });
    const vegetarian2 = pizzaFavorite.filter((pizza) => {
      return pizza.vegetarian === vegetarian;
    });
    const vegetarian3 = pizzaSignature.filter((pizza) => {
      return pizza.vegetarian === vegetarian;
    });
    setItems1(vegetarian1);
    setItems2(vegetarian2);
    setItems3(vegetarian3);
  };

  return (
    <div className="bg-[#f2f4f8] h-[840px]  lg:pb-[250px] md:mb-[10px] overflow-y-scroll">
      <div className="flex lg:w-[50%] md:w-[50%] w-[80%] lg:flex-nowrap md:flex-nowrap flex-wrap justify-between ml-[12%] mt-5 cursor-pointer">
        <div
          className={choose === 1 ? "btn-pizza active-choose" : "btn-pizza"}
          onClick={() => {
            handleChoose(1);
            setItems1(pizzaPremium);
            setItems2(pizzaFavorite);
            setItems3(pizzaSignature);
          }}
        >
          Tất cả
        </div>
        <div
          className={choose === 2 ? "btn-pizza active-choose" : "btn-pizza"}
          onClick={() => {
            handleChoose(2);
            filterItemsSeafood("seafood");
          }}
        >
          <img
            className="w-[20px] mr-1"
            src="https://img.dominos.vn/fried-shrimp_1f364.png"
            alt=""
          />
          Hải sản
        </div>
        <div
          className={choose === 3 ? "btn-pizza active-choose" : "btn-pizza"}
          onClick={() => {
            handleChoose(3);
            filterItemsBeef("beef");
          }}
        >
          <img
            className="w-[20px] mr-1"
            src="https://img.dominos.vn/cut-of-meat_1f969.png"
            alt=""
          />
          Bò
        </div>
        <div
          className={choose === 4 ? "btn-pizza active-choose" : "btn-pizza"}
          onClick={() => {
            handleChoose(4);
            filterItemsChicken("chicken");
          }}
        >
          <img
            className="w-[20px] mr-1"
            src="https://img.dominos.vn/poultry-leg_1f357.png"
            alt=""
          />
          Gà
        </div>
        <div
          className={choose === 5 ? "btn-pizza active-choose" : "btn-pizza"}
          onClick={() => {
            handleChoose(5);
            filterItemsPig("pig");
          }}
        >
          <img
            className="w-[20px] mr-1"
            src="https://img.dominos.vn/bacon_1f953.png"
            alt=""
          />
          Heo
        </div>
        <div
          className={choose === 6 ? "btn-pizza active-choose" : "btn-pizza"}
          onClick={() => {
            handleChoose(6);
            filterItemsVegetarian("vegetarian");
          }}
        >
          <img
            className="w-[20px] mr-1"
            src="https://img.dominos.vn/leafy-green_1f96c.png"
            alt=""
          />
          Ăn chay
        </div>
      </div>
      <div className="premium">
        <div className="flex justify-center relative">
          <hr className="w-[10%] absolute top-[50%] left-[35%] text-[#e7eaef]" />
          <h4 className="text-center text-xl font-extrabold uppercase my-5">
            <span>⭐</span>
            <span>Premium</span>
            <span>⭐</span>
          </h4>
          <hr className="w-[10%] absolute top-[50%] right-[35%] text-[#e7eaef]" />
        </div>
        <div className="flex justify-center">
          <div className="flex items-center">
            <img
              className="mr-2 w-[20%]"
              src="https://dominos.vn/img/icon/pizza-small.svg"
              alt=""
            />
            <span className="text-[#d9c38e] font-semibold">Nhỏ (7"):</span>
            <span className="font-semibold">99.000</span>₫
          </div>
          <div className="flex items-center mx-4 ">
            <img
              className="mr-2 w-[30%]"
              src="https://dominos.vn/img/icon/pizza-medium.svg"
              alt=""
            />
            <span className="text-[#d9c38e] font-semibold">Vừa (9"):</span>
            <span className="font-semibold">189.000</span>₫
          </div>
          <div className="flex items-center">
            <img
              className="mr-2 w-[40%]"
              src="https://dominos.vn/img/icon/pizza-big.svg"
              alt=""
            />
            <span className="text-[#d9c38e] font-semibold">Lớn (12"):</span>
            <span className="font-semibold"> 279.000</span>₫
          </div>
        </div>
        <div className="grid grid-cols-4 auto-cols-fr lg:gap-[30px] md:gap-[20px] mt-5 px-[100px]">
          {items1.map((pizza, index) => {
            return (
              <div
                key={index}
                className="rounded-[10px] border-style: solid border-2 flex flex-col border-[#dfe4ea] bg-white"
              >
                <div className="w-[100%] h-[auto] mb-4 overflow-hidden rounded-t-lg">
                  <img
                    className="w-[100%] h-[100%] rounded-t-lg ease-in duration-150 hover:scale-110"
                    src={pizza.image}
                    alt=""
                  />
                </div>
                <div className="p-2 h-[50%] text-[#0078ae] text-center font-semibold">
                  <button
                    onClick={() => {
                      handlePizza(pizza);
                    }}
                    className="hover:underline lg:text-xl md:text-sm"
                  >
                    {pizza.name}
                  </button>
                </div>
                <div className="text-center font-semibold text-[#25282d] pb-2">
                  <span>99.000 ₫</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="favorite">
        <div className="flex justify-center relative">
          <hr className="w-[10%] absolute top-[50%] left-[35%] text-[#e7eaef]" />
          <h4 className="text-center text-xl font-extrabold uppercase my-5">
            <span>⭐</span>
            <span>Favorite</span>
            <span>⭐</span>
          </h4>
          <hr className="w-[10%] absolute top-[50%] right-[35%] text-[#e7eaef]" />
        </div>
        <div className="flex justify-center">
          <div className="flex items-center ">
            <img
              className="mr-2"
              src="https://dominos.vn/img/icon/pizza-small.svg"
              alt=""
            />
            <span className="text-[#d9c38e] font-semibold">Nhỏ (7"):</span>
            <span className="font-semibold">99.000</span>₫
          </div>
          <div className="flex items-center mx-4">
            <img
              className="mr-2"
              src="https://dominos.vn/img/icon/pizza-medium.svg"
              alt=""
            />
            <span className="text-[#d9c38e] font-semibold">Vừa (9"):</span>
            <span className="font-semibold">189.000</span>₫
          </div>
          <div className="flex items-center">
            <img
              className="mr-2"
              src="https://dominos.vn/img/icon/pizza-big.svg"
              alt=""
            />
            <span className="text-[#d9c38e] font-semibold">Lớn (12"):</span>
            <span className="font-semibold"> 279.000</span>₫
          </div>
        </div>
        <div className="grid grid-cols-4 auto-cols-fr lg:gap-[30px] md:gap-[20px] mt-5 px-[100px]">
          {items2.map((pizza, index) => {
            return (
              <div
                key={index}
                className="rounded-[10px] border-style: solid border-2 flex flex-col border-[#dfe4ea] bg-white"
              >
                <div className="w-[100%] h-[auto] mb-4 overflow-hidden rounded-t-lg">
                  <img
                    className="w-[100%] h-[100%] rounded-t-lg ease-in duration-150 hover:scale-110"
                    src={pizza.image}
                    alt=""
                  />
                </div>
                <div className="p-2 h-[50%] text-[#0078ae] text-center font-semibold">
                  <button
                    onClick={() => {
                      handlePizza(pizza);
                    }}
                    className="hover:underline lg:text-xl md:text-sm"
                  >
                    {pizza.name}
                  </button>
                </div>
                <div className="text-center font-semibold text-[#25282d] pb-2">
                  <span>99.000 ₫</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="signature pb-5">
        <div className="flex justify-center relative">
          <hr className="w-[100px] absolute top-[50%] left-[35%] text-[#e7eaef]" />
          <h4 className="text-center text-xl font-extrabold uppercase my-5">
            <span>⭐</span>
            <span>Signature</span>
            <span>⭐</span>
          </h4>
          <hr className="w-[100px] absolute top-[50%] right-[35%] text-[#e7eaef]" />
        </div>
        <div className="flex justify-center">
          <div className="flex items-center ">
            <img
              className="mr-2"
              src="https://dominos.vn/img/icon/pizza-small.svg"
              alt=""
            />
            <span className="text-[#d9c38e] font-semibold">Nhỏ (7"):</span>
            <span className="font-semibold">99.000</span>₫
          </div>
          <div className="flex items-center mx-4">
            <img
              className="mr-2"
              src="https://dominos.vn/img/icon/pizza-medium.svg"
              alt=""
            />
            <span className="text-[#d9c38e] font-semibold">Vừa (9"):</span>
            <span className="font-semibold">189.000</span>₫
          </div>
          <div className="flex items-center">
            <img
              className="mr-2"
              src="https://dominos.vn/img/icon/pizza-big.svg"
              alt=""
            />
            <span className="text-[#d9c38e] font-semibold">Lớn (12"):</span>
            <span className="font-semibold"> 279.000</span>₫
          </div>
        </div>
        <div className="grid grid-cols-4 auto-cols-fr lg:gap-[30px] md:gap-[20px] mt-5 px-[100px]">
          {items3.map((pizza, index) => {
            return (
              <div
                key={index}
                className="rounded-[10px] border-style: solid border-2 flex flex-col border-[#dfe4ea] bg-white"
              >
                <div className="w-[100%] h-[auto] mb-4 overflow-hidden rounded-t-lg">
                  <img
                    className="w-[100%] h-[100%] rounded-t-lg ease-in duration-150 hover:scale-110"
                    src={pizza.image}
                    alt=""
                  />
                </div>
                <div className="p-2 h-[50%] text-[#0078ae] text-center font-semibold">
                  <button
                    onClick={() => {
                      handlePizza(pizza);
                    }}
                    className="hover:underline lg:text-xl md:text-sm"
                  >
                    {pizza.name}
                  </button>
                </div>
                <div className="text-center font-semibold text-[#25282d] pb-2">
                  <span>99.000 ₫</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Pizza;
