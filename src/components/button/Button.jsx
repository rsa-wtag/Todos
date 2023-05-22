import classNames from "classnames";
import PropTypes from "prop-types";
import "src/components/button/Button.component.scss";

export const Button = ({
  onButtonClick,
  buttonText,
  srcIcon,
  altText,
  buttonClass,
}) => {
  const combinedClass = classNames("button", buttonClass);

  return (
    <button className={combinedClass} onClick={onButtonClick}>
      <img src={iconSrc} alt={altText} /> {buttonText}
    </button>
  );
};

Button.defaultProps = {
  srcIcon: "",
  altText: "",
  onButtonClick: () => {},
  buttonText: "",
  buttonClass: "",
};
