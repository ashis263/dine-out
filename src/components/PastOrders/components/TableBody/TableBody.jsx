import TabelRow from "../TableRow/TabelRow";

const TableBody = ({ ordersToRender }) => {
  console.log(ordersToRender);
  return (
    <tbody className="text-sm">
      {ordersToRender.length !==0 &&
        ordersToRender.map((order) => (
          <TabelRow key={ordersToRender.id} order={order} />
        ))}
    </tbody>
  );
};

export default TableBody;
