import ActionButton from "../ActionButton/ActionButton";
import ItemImage from "../ItemImage/ItemImage";
import ItemInfo from "../ItemInfo/ItemInfo";

const MenuItem = ({
  item,
  menuItems,
  setMenuItems,
  selectedItems,
  setSelectedItems,
  totalPrice,
  setTotalPrice,
}) => {
  const { name, price, image } = item;
  return (
    <div className="bg-gray-700/30 rounded-md p-3 mb-3 flex justify-between items-center hover:bg-gray-700/40 transition-all duration-300">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center">
          <ItemImage image={image} />
          <ItemInfo name={name} price={price} />
        </div>
        <ActionButton
          item={item}
          menuItems={menuItems}
          setMenuItems={setMenuItems}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
        />
      </div>
    </div>
  );
};

export default MenuItem;
