import "src/components/buttonCreator/ButtonCreator.component.scss";

export const ButtonCreator = ({ icon, altText }) => {
  return (
    <button className="button">
      <img src={icon} alt={altText} />
    </button>
  );
};
