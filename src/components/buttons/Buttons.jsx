import mark from "src/assets/images/mark.png";
import pen from "src/assets/images/pen.png";
import bin from "src/assets/images/bin.png";
import "src/components/buttons/Buttons.component.scss";

const Buttons = () => {
  return (
    <>
      <button className="removeStyles">
        <img src={mark} alt="Mark task as done" />
      </button>
      <button className="removeStyles">
        <img src={pen} alt="Edit task" />
      </button>
      <button className="removeStyles">
        <img src={bin} alt="Delete task" />
      </button>
    </>
  );
};

export default Buttons;
