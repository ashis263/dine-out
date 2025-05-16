import TableBody from "../TableBody/TableBody";
import TableHead from "../TableHead/TableHead";

const OrdersContainer = ({ ordersToRender }) => {
  return (
    <div className="bg-cardbg rounded-lg p-4">
      <div className="reports-container">
        <table className="min-w-full">
          <TableHead />
          <TableBody ordersToRender={ordersToRender} />
        </table>
      </div>
    </div>
  );
};

export default OrdersContainer;
