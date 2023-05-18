import {
  MARK_ICON,
  PEN_ICON,
  BIN_ICON,
  MARK_TEXT,
  EDIT_TEXT,
  DELETE_TEXT,
} from "src/utils/constants/constants";
import { ButtonCreator } from "../buttonCreator/ButtonCreator";

const Buttons = () => {
  return (
    <div>
      <ButtonCreator icon={MARK_ICON} altText={MARK_TEXT} />
      <ButtonCreator icon={PEN_ICON} altText={EDIT_TEXT} />
      <ButtonCreator icon={BIN_ICON} altText={DELETE_TEXT} />
    </div>
  );
};

export default Buttons;
