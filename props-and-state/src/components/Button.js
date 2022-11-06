const Button = ({ handleClick, text, style }) => {
  return (
    <button onClick={handleClick} style={style}>
      {text}
    </button>
  );
};

export default Button;
