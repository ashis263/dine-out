import { useState } from "react";
import Menu from "./components/Menu/Menu";
import NameInput from "./components/NameInput/NameInput";
import OrderButton from "./components/OrderButton/OrderButton";
import SidebarIntro from "./components/SidebarIntro/SidebarIntro";

const Sidebar = ({ orders, setOrders }) => {
  const [customerName, setCustomerName] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  console.log(orders);
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
      id: orders.length + 1,
      customerName,
      totalItems: selectedItems.length,
      status: "PENDING",
    };
    setOrders([...orders, order]);
    setSelectedItems([]);
    setTotalPrice(0);
    setCustomerName("");
  };
  return (
    <aside className="bg-cardbg rounded-lg p-6 h-[calc(100vh_-_130px)]">
      <SidebarIntro />
      <NameInput setCustomerName={setCustomerName} />
      <Menu
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
