const FilterOption = ({ orders, setOrdersToRender }) => {
  const handleChange = (e) => {
    const selected = e.target.value;
    let filteredOrders;
    if (selected === "Pending") {
      filteredOrders = orders.filter((o) => o.status === selected);
      setOrdersToRender(filteredOrders);
    } else if (selected === "Delivered") {
      filteredOrders = orders.filter((o) => o.status === selected);
      setOrdersToRender(filteredOrders);
    } else {
      setOrdersToRender(orders);
    }
  };
  return (
    <select
      onChange={handleChange}
      className="appearance-none bg-zinc-900 accent-orange-600 border-none outline-none rounded-sm"
    >
      <option value="All">All</option>
      <option value="Pending">Pending</option>
      <option value="Delivered">Delivered</option>
    </select>
  );
};

export default FilterOption;
