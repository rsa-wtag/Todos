import { MARK_ICON, PEN_ICON, BIN_ICON } from "src/utils/constants/constants";
import { createButton } from "src/utils/helpers/createButton";

const Buttons = () => {
  return (
    <div>
      {createButton(MARK_ICON, "Mark task as done")}
      {createButton(PEN_ICON, "Edit task")}
      {createButton(BIN_ICON, "Delete task")}
    </div>
  );
};

export default Buttons;
