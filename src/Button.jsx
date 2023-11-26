/* eslint-disable */

const Button = ({ label, handleClick, isDisabled }) => {
  if (!isDisabled) {
    return (
      <button className="header-button" onClick={handleClick}>
        {label}
      </button>
    );
  } else {
    return (
      <button className="header-button" onClick={handleClick} disabled>
        {label}
      </button>
    );
  }
};

export default Button;
