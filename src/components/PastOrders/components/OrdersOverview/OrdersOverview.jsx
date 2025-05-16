import OverViewCard from "../OverViewCard/OverViewCard";

const OrdersOverview = ({ orders }) => {
  const totalOrders = orders.length;
  let totalPendingOrders = 0;
  let totalDeliveredOrders = 0;
  if (orders.length) {
    const pendingOrders = orders.filter((order) => order.status === "Pending");
    totalPendingOrders = pendingOrders.length;
    const DeliveredOrders = orders.filter(
      (order) => order.status === "Delivered"
    );
    totalDeliveredOrders = DeliveredOrders.length;
  }
  const orderCategories = [
    { id: 1, categoryName: "Total Order", count: totalOrders },
    { id: 2, categoryName: "Pending", count: totalPendingOrders },
    { id: 3, categoryName: "Delivered", count: totalDeliveredOrders },
  ];
  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      {orderCategories.map((category) => (
        <OverViewCard key={category.id} category={category} />
      ))}
    </div>
  );
};

export default OrdersOverview;
