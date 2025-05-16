import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import PastOrders from "./components/PastOrders/PastOrders";

const App = () => {
  const [orders, setOrders] = useState([]);
  const [ordersToRender, setOrdersToRender] = useState(orders);
  return (
    <div className="container mx-auto px-4 h-screen flex flex-col">
      <header>
        <Navbar />
      </header>
      <main className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
        <Sidebar orders={orders} setOrders={setOrders} ordersToRender={ordersToRender} setOrdersToRender={setOrdersToRender}  />
        <PastOrders orders={orders} ordersToRender={ordersToRender} setOrdersToRender={setOrdersToRender} />
      </main>
    </div>
  );
};

export default App;
