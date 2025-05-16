const ItemInfo = ({ name, price }) => {
  return (
    <div>
      <h3 className="font-medium">{name}</h3>
      <p className="text-xs text-gray-400">BDT {price}</p>
    </div>
  );
};

export default ItemInfo;
