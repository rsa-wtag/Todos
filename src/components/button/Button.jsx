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
      <img src={srcIcon} alt={altText} /> {buttonText}
    </button>
  );
};

Button.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  srcIcon: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  buttonClass: PropTypes.string.isRequired,
};
