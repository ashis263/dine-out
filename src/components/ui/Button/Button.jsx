const Button = ({ variant, clickHandler, content, ...props }) => {
  const { status } = props;
  const classes =
    (variant === "primary" &&
      "w-full bg-primary hover:bg-primary/50 text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1") ||
    (variant === "delete" &&
      "bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300") ||
    (variant === "deliver" &&
      `bg-gray-800 hover:bg-green-600 text-xs px-3 py-1 rounded-full transition-colors duration-300 ${status === "Delivered" ? "hidden" : ""}`);
  return (
    <button onClick={clickHandler} className={`${classes}`}>
      {content}
    </button>
  );
};

export default Button;
