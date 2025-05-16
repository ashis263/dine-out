const Button = ({ variant, clickHandler, content }) => {
  const classes =
    variant === "primary" &&
    "w-full bg-primary hover:bg-primary/50 text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
  return <button onClick={clickHandler} className={`${classes}`}>{content}</button>;
};

export default Button;
