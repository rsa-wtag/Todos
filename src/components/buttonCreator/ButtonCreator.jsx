import "src/components/buttonCreator/ButtonCreator.component.scss";

export const ButtonCreator = ({ icon, altText }) => {
  return (
    <button className="removeStyles">
      <img src={icon} alt={altText} />
    </button>
  );
};
