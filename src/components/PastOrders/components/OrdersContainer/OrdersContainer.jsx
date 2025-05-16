import TableBody from "../TableBody/TableBody";
import TableHead from "../TableHead/TableHead";

const OrdersContainer = ({
  orders,
  setOrders,
  ordersToRender,
  setOrdersToRender,
}) => {
  return (
    <div className="bg-cardbg rounded-lg p-4">
      <div className="reports-container">
        <table className="min-w-full">
          <TableHead />
          <TableBody
            orders={orders}
            setOrders={setOrders}
            ordersToRender={ordersToRender}
            setOrdersToRender={setOrdersToRender}
          />
        </table>
      </div>
    </div>
  );
};

export default OrdersContainer;
