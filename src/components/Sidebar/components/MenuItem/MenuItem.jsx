import ActionButton from "../ActionButton/ActionButton";
import ItemImage from "../ItemImage/ItemImage";
import ItemInfo from "../ItemInfo/ItemInfo";

const MenuItem = ({ name, price, image }) => {
  return (
    <div className="bg-gray-700/30 rounded-md p-3 mb-3 flex justify-between items-center hover:bg-opacity-40 transition-all duration-300">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center">
          <ItemImage image={image} />
          <ItemInfo name={name} price={price} />
        </div>
        <ActionButton />
      </div>
    </div>
  );
};

export default MenuItem;
