import classNames from "classnames";
import "src/components/button/Button.component.scss";

export const Button = ({
  buttonText,
  iconSrc,
  altText,
  buttonClass,
  onButtonClick,
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
  buttonText: "",
  buttonClass: "",
  onButtonClick: () => {},
};
