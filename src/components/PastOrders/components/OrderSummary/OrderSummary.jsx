import SectionHeading from "../../../ui/SectionHeading/SectionHeading";
import OrdersOverview from "../OrdersOverview/OrdersOverview";

const OrderSummary = ({ orders }) => {
  return (
    <section>
      <SectionHeading heading="Order Summary" />
      <OrdersOverview orders={orders} />
    </section>
  );
};

export default OrderSummary;
