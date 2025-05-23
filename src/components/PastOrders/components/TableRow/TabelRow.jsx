import Button from "../../../ui/Button/Button";

const TabelRow = ({
  order,
  orders,
  setOrders,
  ordersToRender,
  setOrdersToRender,
}) => {
  const { id, customerName, items, amount, status } = order;
  const handleDelete = () => {
    const orderAfterDeletingFromAll = orders.filter((o) => o.id !== id);
    setOrders(orderAfterDeletingFromAll);
    const orderAfterDeletingFromFiltered = ordersToRender.filter(
      (o) => o.id !== id
    );
    setOrdersToRender(orderAfterDeletingFromFiltered);
  };
  const handleDeliver = () => {
    const orderAfterDeliveringFromAll = orders.map((o) => {
      if (o.id === id) {
        return {...o, status: "Delivered"}
      }else{
        return o;
      }
    });
    setOrders(orderAfterDeliveringFromAll);
    const orderAfterDeliveringFromFiltered = ordersToRender.map((o) => {
      if (o.id === id) {
        return {...o, status: "Delivered"}
      }else{
        return o;
      }
    });
    setOrdersToRender(orderAfterDeliveringFromFiltered);
  };
  return (
    <tr className="border-t border-gray-700">
      <td className="py-3">{id}</td>
      <td className="py-3">{customerName}</td>
      <td className="py-3">{items}</td>
      <td className="py-3">{amount}</td>
      <td className="py-3">
        <span className={`${status === "Delivered" ? "text-green-500" : "text-red-500"} uppercase`}>{status}</span>
      </td>
      <td className="py-3">
        <Button variant="delete" content="Delete" clickHandler={handleDelete} />
        <Button variant="deliver" content="DELIVER" clickHandler={handleDeliver} status={status} />
      </td>
    </tr>
  );
};

export default TabelRow;
