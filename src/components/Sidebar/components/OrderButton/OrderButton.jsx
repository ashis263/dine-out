const OrderButton = ({totalPrice}) => {
  return (
    <button className="w-full bg-primary hover:bg-opacity-90 text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
      Place Order (BDT {totalPrice})
    </button>
  );
};

export default OrderButton;
