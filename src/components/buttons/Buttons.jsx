import { MARK_ICON, PEN_ICON, BIN_ICON } from "src/utils/constants/constants";
import { ButtonCreator } from "../buttonCreator/ButtonCreator";

const Buttons = () => {
  return (
    <div>
      <ButtonCreator icon={MARK_ICON} altText={"Mark task as done"} />
      <ButtonCreator icon={PEN_ICON} altText={"Edit task"} />
      <ButtonCreator icon={BIN_ICON} altText={"Delete task"} />
    </div>
  );
};

export default Buttons;
