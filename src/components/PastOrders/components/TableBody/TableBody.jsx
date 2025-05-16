import TabelRow from "../TableRow/TabelRow";

const TableBody = ({
  orders,
  setOrders,
  ordersToRender,
  setOrdersToRender,
}) => {
  return (
    <tbody className="text-sm">
      {ordersToRender.length !== 0 &&
        ordersToRender.map((order) => (
          <TabelRow
            orders={orders}
            setOrders={setOrders}
            ordersToRender={ordersToRender}
            setOrdersToRender={setOrdersToRender}
            key={ordersToRender.id}
            order={order}
          />
        ))}
    </tbody>
  );
};

export default TableBody;
