import "src/utils/helpers/createButtons.scss";

export const createButton = (clickFunction, ICON, altText) => {
  return (
    <button className="removeStyles" onClick={clickFunction}>
      <img src={ICON} alt={altText} />
    </button>
  );
};
