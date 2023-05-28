import PropTypes from "prop-types";
import classNames from "classnames";
import "src/components/button/Button.component.scss";

const Button = ({
  buttonText,
  iconSrc,
  altText,
  buttonClass,
  isButtonDisabled,
  onButtonClick,
}) => {
  const combinedClass = classNames("button", buttonClass);

  return (
    <button
      className={combinedClass}
      onClick={onButtonClick}
      disabled={isButtonDisabled}
    >
      <img src={iconSrc} alt={altText} /> <span>{buttonText}</span>
    </button>
  );
};

Button.defaultProps = {
  iconSrc: null,
  altText: null,
  buttonText: null,
  buttonClass: null,
  isButtonDisabled: false,
  onButtonClick: () => {},
};

Button.propTypes = {
  iconSrc: PropTypes.string,
  altText: PropTypes.string,
  buttonText: PropTypes.string,
  buttonClass: PropTypes.string,
  isButtonDisabled: PropTypes.bool,
  onButtonClick: PropTypes.func,
};

export default Button;
