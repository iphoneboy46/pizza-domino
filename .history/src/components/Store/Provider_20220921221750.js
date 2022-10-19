import React, { useState, useRef, useEffect } from "react";
import Context from "./Context";
import data from "../Data/Data";

function Provider({ children }) {
  const {
    pizzaPremium,
    pizzaFavorite,
    pizzaSignature,
    pastas,
    chicken,
    dessert,
    drinks,
    sausage,
    bread,
    potato,
    cakeBase,
    cakeSize,
    cakeMore12,
    cakeBorder12,
    cakeMore9,
    cakeBorder9,
    khuyenmai1,
    khuyenmai2,
    khuyenmai3,
  } = data;
  const [orderPizza, setOrderPizza] = useState([]);
  const [orderSideDishes, setOrderSideDishes] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [address, setAddress] = useState("");
  const [menuOrders, setMenuOrders] = useState([]);
  const [orderAddress,setOrderAddress] = useState([]);
  const [takeAway, setTakeAway] = useState("");
  const [deliver, setDeliver] = useState("");
  const inputRef = useRef();

  const handlePizza = (pizza) => {
    const orderPizza = document.querySelector(".order-pizza");
    const content = document.querySelector(".content");
    setOrderPizza(pizza);
    orderPizza.style.top = "11%";
    content.classList.add("modal");
    document.body.style.overflow = "hidden";
  };

  const handlePizzaEdit =(pizza) =>{
    const orderPizza = document.querySelector(".order-pizza");
    const content = document.querySelector(".content");
    setMenuOrders(pizza);
    orderPizza.style.top = "11%";
    content.classList.add("modal");
    document.body.style.overflow = "hidden";
  }

  const handleSideDishes = (sideDishes) => {
    const orderSideDishes = document.querySelector(".order-SideDishes");
    const content = document.querySelector(".content");
    setOrderSideDishes(sideDishes);
    orderSideDishes.style.top = "20%";
    content.classList.add("modal");
    document.body.style.overflow = "hidden";
  };

    // tinh tong quantity

    const quantityOrders = menuOrders.map((order) => {
      return order.quantity;
    });
  
    let totalQuantity = quantityOrders.reduce((order, sum) => {
      return (sum += order);
    },0);


  return (
    <Context.Provider
      value={{
        takeAway, 
        setTakeAway,
        deliver, 
        setDeliver,
        totalQuantity,
        orderAddress,
        setOrderAddress,
        pizzaPremium,
        pizzaFavorite,
        pizzaSignature,
        pastas,
        chicken,
        dessert,
        drinks,
        sausage,
        bread,
        potato,
        menuOrders,
        handleSideDishes,
        orderSideDishes,
        handlePizza,
        handlePizzaEdit,
        orderPizza,
        cakeBase,
        cakeSize,
        cakeMore12,
        cakeBorder12,
        cakeMore9,
        cakeBorder9,
        quantity,
        setQuantity,
        khuyenmai1,
        khuyenmai2,
        khuyenmai3,
        address,
        setAddress,
        setMenuOrders,
        inputRef,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Provider;
