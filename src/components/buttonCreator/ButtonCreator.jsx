import "src/components/buttonCreator/ButtonCreator.component.scss";
import PropTypes from "prop-types";

export const ButtonCreator = ({ icon, altText }) => {
  return (
    <button className="button">
      <img src={icon} alt={altText} />
    </button>
  );
};

ButtonCreator.propTypes = {
  icon: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};
