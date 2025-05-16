import Button from "../../../ui/Button/Button";

const OrderButton = ({ totalPrice, placeOrder }) => {
  const content = `Place Order (BDT ${totalPrice})`
  return (
    <>
      <Button variant="primary" clickHandler={placeOrder} content={content} />
    </>
  );
};

export default OrderButton;
