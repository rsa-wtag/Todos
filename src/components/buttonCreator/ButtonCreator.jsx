import PropTypes from "prop-types";
import "src/components/buttonCreator/ButtonCreator.component.scss";

export const ButtonCreator = ({
  onButtonClick,
  buttonText,
  icon,
  altText,
  buttonClass,
}) => {
  return (
    <button className={"button " + buttonClass} onClick={onButtonClick}>
      <img src={icon} alt={altText} /> {buttonText}
    </button>
  );
};

ButtonCreator.propTypes = {
  icon: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};
