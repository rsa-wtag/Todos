import "src/utils/helpers/createButtons.scss";

export const createButton = (ICON, altText) => {
  return (
    <button className="removeStyles">
      <img src={ICON} alt={altText} />
    </button>
  );
};
