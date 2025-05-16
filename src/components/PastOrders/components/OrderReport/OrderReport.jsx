import TopBar from "../../TopBar/TopBar";
import OrdersContainer from "../OrdersContainer/OrdersContainer";

const OrderReport = ({ orders, ordersToRender, setOrdersToRender }) => {
  return (
    <section>
      <TopBar orders={orders} setOrdersToRender={setOrdersToRender} />
      <OrdersContainer ordersToRender={ordersToRender} />
    </section>
  );
};

export default OrderReport;
