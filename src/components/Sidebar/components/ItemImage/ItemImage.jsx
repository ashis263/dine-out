const ItemImage = ({image}) => {
  return (
    <div className="w-12 h-12   flex items-center justify-center mr-3">
      <img src={image} alt={name} className="w-10 h-10" />
    </div>
  );
};

export default ItemImage;
