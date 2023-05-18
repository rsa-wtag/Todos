import { MARK_ICON, PEN_ICON, BIN_ICON } from "src/utils/constants/constants";
import { createButton } from "src/utils/helpers/createButton";
import Delete from "src/components/delete/Delete";

const Buttons = ({ id }) => {
  return (
    <div>
      {createButton(MARK_ICON, "Mark task as done")}
      {createButton(PEN_ICON, "Edit task")}
      <Delete taskId={id} />
    </div>
  );
};

export default Buttons;
