import MenuIteam from "../MenuItem/MenuItem";

const Menu = ({
  menuItems,
  setMenuItems,
  selectedItems,
  setSelectedItems,
  totalPrice,
  setTotalPrice,
}) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">Choose Items</label>
      <div className="items-container">
        {menuItems.map((item) => (
          <MenuIteam
            key={item.id}
            item={item}
            menuItems={menuItems}
            setMenuItems={setMenuItems}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
            totalPrice={totalPrice}
            setTotalPrice={setTotalPrice}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
