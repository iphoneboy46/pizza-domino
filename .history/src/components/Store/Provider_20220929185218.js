import React, { useRef, useState } from "react";
import data from "../Data/Data";
import Context from "./Context";

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
  const [orderAddress, setOrderAddress] = useState([]);
  const [takeAway, setTakeAway] = useState("");
  const [deliver, setDeliver] = useState("");
  const [checkedBase, setCheckedBase] = useState("Đế mỏng giòn");
  const [checkedSize, setCheckedSize] = useState("Cỡ 9 inch");
  const [checkedPrice1, setCheckedPrice1] = useState(189);

  const [options12, setOptions12] = useState(false);
  const [options9, setOptions9] = useState(false);
  const [checkedMore9, setCheckedMore9] = useState("");
  const [checkedBorder9, setCheckedBorder9] = useState("");
  const [checkedMore12, setCheckedMore12] = useState("");
  const [checkedBorder12, setCheckedBorder12] = useState("");
  const [checkedPrice2, setCheckedPrice2] = useState(0);
  const [checkedPrice3, setCheckedPrice3] = useState(0);
  const [checkedPrice4, setCheckedPrice4] = useState(0);
  const [checkedPrice5, setCheckedPrice5] = useState(0);
  const inputRef = useRef();

  const handlePizza = (pizza) => {
    const orderPizza = document.querySelector(".order-pizza");
    const content = document.querySelector(".content");
    setOrderPizza(pizza);
    orderPizza.style.top = "11%";
    content.classList.add("modal");
    document.body.style.overflow = "hidden";
  };

  const handlePizzaEdit = (pizza) => {
    const orderPizza = document.querySelector(".order-pizzaEdit");
    const content = document.querySelector(".content");
    setMenuOrders(pizza);
    console.log(pizza);
    orderPizza.style.top = "11%";
    content.classList.add("modal");
    document.body.style.overflow = "hidden";
  };

  const handleDelete = (id) => {
    setMenuOrders(
      menuOrders.filter((pizza) => {
        return pizza.id !== id;
      })
    );
  };

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

  let totalQuantity = quantityOrders.reduce((quantity, sum) => {
    return (sum += quantity);
  }, 0);

  const priceOrder = menuOrders.map((order) => {
    return order.price;
  });

  let totalOrders = priceOrder.reduce((price, sum) => {
    return (sum += price);
  }, 0);

  return (
    <Context.Provider
      value={{
        options12,
        setOptions12,
        totalOrders,
        handleDelete,
        checkedPrice1,
        setCheckedPrice1,
        checkedBase,
        setCheckedBase,
        checkedSize,
        setCheckedSize,
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