import AddIcon from "../AddIcon/AddIcon";
import RemoveIcon from "../RemoveIcon/RemoveIcon";

const ActionButton = ({
  item,
  isSelected,
  setIsSelected,
  selectedItems,
  setSelectedItems,
  totalPrice,
  setTotalPrice,
}) => {
  const handleSelect = () => {
    let updatedSelectedItems;
    if (!isSelected) {
      updatedSelectedItems = [...selectedItems, item];
      setIsSelected(true);
      setSelectedItems(updatedSelectedItems);
      setTotalPrice(totalPrice + item.price);
    } else {
      updatedSelectedItems = selectedItems.filter((s) => s.id !== item.id);
      setIsSelected(false);
      setSelectedItems(updatedSelectedItems);
      setTotalPrice(totalPrice - item.price);
    }
  };
  return (
    <button
      onClick={handleSelect}
      className="w-8 h-8 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300"
    >
      {isSelected ? <RemoveIcon /> : <AddIcon />}
    </button>
  );
};

export default ActionButton;
