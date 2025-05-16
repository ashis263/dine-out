import TopBar from "../../TopBar/TopBar";
import OrdersContainer from "../OrdersContainer/OrdersContainer";

const OrderReport = ({
  orders,
  setOrders,
  ordersToRender,
  setOrdersToRender,
}) => {
  return (
    <section>
      <TopBar orders={orders} setOrdersToRender={setOrdersToRender} />
      <OrdersContainer
        orders={orders}
        setOrders={setOrders}
        ordersToRender={ordersToRender}
        setOrdersToRender={setOrdersToRender}
      />
    </section>
  );
};

export default OrderReport;
