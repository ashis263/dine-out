const NameInput = ({customerName, setCustomerName}) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">Customer Name</label>
      <input
        type="text"
        onChange={(e) => setCustomerName(e.target.value)}
        value={customerName}
        className="w-full bg-gray-700/50 rounded-md p-2 outline outline-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
      />
    </div>
  );
};

export default NameInput;
