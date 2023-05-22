import classNames from "classnames";
import "src/components/button/Button.component.scss";

export const Button = ({
  onButtonClick,
  buttonText,
  iconSrc,
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
  iconSrc: "",
  altText: "",
  onButtonClick: () => {},
  buttonText: "",
  buttonClass: "",
};
