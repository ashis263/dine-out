import { useState } from "react";
import Menu from "./components/Menu/Menu";
import NameInput from "./components/NameInput/NameInput";
import OrderButton from "./components/OrderButton/OrderButton";
import SidebarIntro from "./components/SidebarIntro/SidebarIntro";
import burger from "../../assets/images/hamburger.svg";
import chicken from "../../assets/images/chicken.svg";
import submarine from "../../assets/images/submarine.png";
import taco from "../../assets/images/taco.png";
import soup from "../../assets/images/soup.png";
import soda from "../../assets/images/soda.png";
import sandwich from "../../assets/images/sandwich.png";
import fries from "../../assets/images/french-fries.png";
import pizza from "../../assets/images/pizza.png";
import pastry from "../../assets/images/pastry.png";

const menu = [
  { id: 1, name: "Burger", price: 299, image: burger, isSelected: false },
  {
    id: 2,
    name: "Fried Chicken",
    price: 349,
    image: chicken,
    isSelected: false,
  },
  { id: 3, name: "Sandwich", price: 199, image: sandwich, isSelected: false },
  { id: 4, name: "Pizza", price: 599, image: pizza, isSelected: false },
  { id: 5, name: "Taco", price: 249, image: taco, isSelected: false },
  {
    id: 6,
    name: "Submarine Sandwich",
    price: 279,
    image: submarine,
    isSelected: false,
  },
  { id: 7, name: "Fries", price: 189, image: fries, isSelected: false },
  { id: 8, name: "Soup", price: 199, image: soup, isSelected: false },
  { id: 9, name: "Soda", price: 99, image: soda, isSelected: false },
  { id: 10, name: "Pastry", price: 229, image: pastry, isSelected: false },
];

const Sidebar = ({ orders, setOrders, setOrdersToRender }) => {
  const [customerName, setCustomerName] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [menuItems, setMenuItems] = useState(menu);
  const [orderId, setOrderId] = useState(1);
  const placeOrder = () => {
    if (!selectedItems.length && !customerName.length) {
      alert("Please enter cutomer name and select some items!");
      return;
    } else if (!selectedItems.length) {
      alert("Please select some items!");
      return;
    } else if (!customerName.length) {
      alert("Please enter the customer name!");
      return;
    }

    const order = {
      id: orderId,
      customerName,
      items: selectedItems.length,
      amount: totalPrice,
      status: "Pending",
    };
    setOrders([order, ...orders]);
    setOrdersToRender([order, ...orders]);
    setSelectedItems([]);
    setTotalPrice(0);
    setCustomerName("");
    setMenuItems(menu);
    setOrderId(orderId + 1);
  };
  return (
    <aside className="bg-cardbg rounded-lg p-6 h-[calc(100vh_-_130px)]">
      <SidebarIntro />
      <NameInput
        customerName={customerName}
        setCustomerName={setCustomerName}
      />
      <Menu
        menuItems={menuItems}
        setMenuItems={setMenuItems}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
      />
      <OrderButton
        orders={orders}
        setOrders={setOrders}
        customerName={customerName}
        totalPrice={totalPrice}
        placeOrder={placeOrder}
      />
    </aside>
  );
};

export default Sidebar;
