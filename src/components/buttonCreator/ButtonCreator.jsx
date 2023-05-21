import "src/components/buttonCreator/ButtonCreator.component.scss";

export const ButtonCreator = ({ icon, altText }) => {
  return (
    <button className="remove-styles">
      <img src={icon} alt={altText} />
    </button>
  );
};
