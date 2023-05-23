import PropTypes from "prop-types";
import classNames from "classnames";
import "src/components/button/Button.component.scss";

export const Button = ({
  buttonText,
  iconSrc,
  altText,
  buttonClass,
  onButtonClick,
}) => {
  const combinedClass = classNames("button", buttonClass);

  return (
    <button className={combinedClass} onClick={onButtonClick}>
      <img src={iconSrc} alt={altText} /> {buttonText}
    </button>
  );
};

Button.defaultProps = {
  iconSrc: "",
  altText: "",
  buttonText: "",
  buttonClass: "",
  onButtonClick: () => {},
};

Button.propTypes = {
  iconSrc: PropTypes.string,
  altText: PropTypes.string,
  buttonText: PropTypes.string,
  buttonClass: PropTypes.string,
  onButtonClick: PropTypes.func,
};
