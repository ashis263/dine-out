const OverViewCard = ({ category }) => {
  const { id, categoryName, count } = category;
  const countStyles = `text-5xl font-bold mb-2 ${
    (id === 1 && "text-yellow-500") ||
    (id === 2 && "text-red-500") ||
    (id === 3 && "text-green-500")
  }`;
  const labelStyles = `text-xs font-medium px-3 py-1 rounded-full inline-block ${
    (id === 1 && "text-yellow-200 bg-yellow-800/50") ||
    (id === 2 && "text-red-200 bg-red-800/50") ||
    (id === 3 && "text-green-200 bg-green-800/50")
  }`;
  return (
    <div className="bg-cardbg rounded-lg p-4 relative overflow-hidden">
      <div className={countStyles}>{count}</div>
      <div className={labelStyles}>{categoryName}</div>
    </div>
  );
};

export default OverViewCard;
