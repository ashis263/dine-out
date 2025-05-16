import OrderReport from "./components/OrderReport/OrderReport";
import OrderSummary from "./components/OrderSummary/OrderSummary";

const PastOrders = ({
  orders,
  setOrders,
  ordersToRender,
  setOrdersToRender,
}) => {
  return (
    <div className="md:col-span-2 h-[calc(100vh_-_130px)]">
      <OrderSummary orders={orders} />
      <OrderReport
        orders={orders}
        setOrders={setOrders}
        ordersToRender={ordersToRender}
        setOrdersToRender={setOrdersToRender}
      />
    </div>
  );
};

export default PastOrders;
