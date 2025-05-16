import AddIcon from "../AddIcon/AddIcon";
import RemoveIcon from "../RemoveIcon/RemoveIcon";

const ActionButton = () => {
  return (
    <button className="w-8 h-8 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300">
      <AddIcon />
      {/* <RemoveIcon /> */}
    </button>
  );
};

export default ActionButton;
