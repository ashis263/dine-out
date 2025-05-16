import AddIcon from "../AddIcon/AddIcon";
import RemoveIcon from "../RemoveIcon/RemoveIcon";

const ActionButton = ({
  item,
  menuItems,
  setMenuItems,
  selectedItems,
  setSelectedItems,
  totalPrice,
  setTotalPrice,
}) => {
  const handleSelect = () => {
    let updatedSelectedItems;
    if (!item.isSelected) {
      updatedSelectedItems = [...selectedItems, item];
      const updatedMenuItems = menuItems.map((m) => {
        if (item.id === m.id) {
          return {
            ...item,
            isSelected: true,
          };
        } else {
          return m;
        }
      });
      setMenuItems(updatedMenuItems)
      setSelectedItems(updatedSelectedItems);
      setTotalPrice(totalPrice + item.price);
    } else {
      updatedSelectedItems = selectedItems.filter((s) => s.id !== item.id);
      const updatedMenuItems = menuItems.map((m) => {
        if (item.id === m.id) {
          return {
            ...item,
            isSelected: false,
          };
        } else {
          return m;
        }
      });
      setMenuItems(updatedMenuItems)
      setSelectedItems(updatedSelectedItems);
      setTotalPrice(totalPrice - item.price);
    }
  };
  return (
    <button
      onClick={handleSelect}
      className="w-8 h-8 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300"
    >
      {item.isSelected ? <RemoveIcon /> : <AddIcon />}
    </button>
  );
};

export default ActionButton;
