import React, { useEffect, useRef, useState } from "react";
import data from "../Data/Data";
import Context from "./Context";

function Provider({ children }) {
  console.log(data);
  const [btnExits, setbtnExits] = useState(true);
  const [orderPizza, setOrderPizza] = useState([]);
  const [orderSideDishes, setOrderSideDishes] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [address, setAddress] = useState(
    JSON.parse(localStorage.getItem("address")) || ""
  );
  const [menuOrders, setMenuOrders] = useState(
    JSON.parse(localStorage.getItem("menuOrders")) || []
  );
  const [orderAddress, setOrderAddress] = useState(
    JSON.parse(localStorage.getItem("orderAddress")) || []
  );
  const [takeAway, setTakeAway] = useState("");
  const [deliver, setDeliver] = useState("Giao hàng tận nơi");
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
  const [account, setAccount] = useState(
    JSON.parse(localStorage.getItem("account")) || []
  );
  const [nameEditMonPhu, setNameEditMonPhu] = useState("");
  const [ghiChu, setGhiChu] = useState(
    JSON.parse(localStorage.getItem("ghichu")) || ""
  );
  const inputRef = useRef();

  const [listDonHang, setListDonHang] = useState([]);
  console.log(listDonHang);

  console.log(account);

  useEffect(() => {
    localStorage.setItem("menuOrders", JSON.stringify(menuOrders));
    localStorage.setItem("address", JSON.stringify(address));
    localStorage.setItem("ghichu", JSON.stringify(ghiChu));
    localStorage.setItem("account", JSON.stringify(account));
    localStorage.setItem("orderAddress", JSON.stringify(orderAddress));
    localStorage.setItem("listDonHang", JSON.stringify(listDonHang));
    
  }, [menuOrders, address, orderAddress, account]);

  const handlePizza = (pizza) => {
    const orderPizza = document.querySelector(".order-pizza");
    const content = document.querySelector(".content");
    setOrderPizza(pizza);
    orderPizza.style.top = "11%";
    content.classList.add("modal");
    document.body.style.overflow = "hidden";
    setQuantity(1);
  };

  const handlePizzaEdit = (data) => {
    const orderPizza = document.querySelector(".order-pizzaEdit");
    const content = document.querySelector(".content");
    orderPizza.style.top = "11%";
    content.classList.add("modal");
    document.body.style.overflow = "hidden";
    setOrderPizza(data);
  };

  const handleSideDishesEdit = (data) => {
    const orderDishes = document.querySelector(".order-DishesEdit");
    const content = document.querySelector(".content");
    orderDishes.style.top = "25%";
    content.classList.add("modal");
    document.body.style.overflow = "hidden";
    setOrderSideDishes(data);
  };

  console.log(orderSideDishes);

  const handleDelete = (name) => {
    setMenuOrders(
      menuOrders.filter((pizza) => {
        return pizza.name !== name;
      })
    );
    setQuantity(1);
  };

  const handleSideDishes = (sideDishes) => {
    const orderSideDishes = document.querySelector(".order-SideDishes");
    const content = document.querySelector(".content");
    setOrderSideDishes(sideDishes);
    orderSideDishes.style.top = "25%";
    content.classList.add("modal");
    document.body.style.overflow = "hidden";
  };

  function handleAddress() {
    setOrderAddress({
      address: address,
      takeAway: takeAway,
      deliver: deliver,
    });
  }

  // tinh tong quantity

  const quantityOrders = menuOrders.map((order) => {
    return order.quantity;
  });

  let totalQuantity = quantityOrders.reduce((quantity, sum) => {
    return (sum += quantity);
  }, 0);

  // tinh tong tien

  const priceOrders = menuOrders.map((order) => {
    return order.totalP;
  });

  console.log(menuOrders);

  let totalOrders = priceOrders.reduce((totalP, sum) => {
    return (sum += totalP);
  }, 0);

  let totalOrderCard = totalOrders * totalQuantity;
  console.log(totalOrderCard);

  // IP
  const [ip, setIP] = useState(
    "!1m18!1m12!1m3!1d501726.00671526033!2d106.12087673863454!3d10.754939193630381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529292e8d3dd1%3A0xf15f5aad773c112b!2zSOG7kyBDaMOtIE1pbmgsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1665470875156!5m2!1svi!2s"
  );
  const handleIP = (ip) => {
    setIP(ip);
  };

  return (
    <Context.Provider
      value={{
        listDonHang,
        setListDonHang,
        setGhiChu,
        ghiChu,
        handleAddress,
        account,
        setAccount,
        ip,
        setIP,
        handleIP,
        handleSideDishesEdit,
        btnExits,
        setbtnExits,
        checkedPrice5,
        setCheckedPrice5,
        checkedPrice4,
        setCheckedPrice4,
        checkedPrice3,
        setCheckedPrice3,
        checkedPrice2,
        setCheckedPrice2,
        checkedBorder12,
        setCheckedBorder12,
        checkedMore12,
        setCheckedMore12,
        checkedBorder9,
        setCheckedBorder9,
        checkedMore9,
        setCheckedMore9,
        options9,
        setOptions9,
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
        ...data,
        menuOrders,
        handleSideDishes,
        orderSideDishes,
        handlePizza,
        handlePizzaEdit,
        orderPizza,
        quantity,
        setQuantity,
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
