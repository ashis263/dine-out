import OrderSummary from "./components/OrderSummary/OrderSummary";

const PastOrders = ({orders}) => {
  return (
    <div className="md:col-span-2 h-[calc(100vh_-_130px)]">
      <OrderSummary orders={orders}/>
    </div>
  );
};

export default PastOrders;
