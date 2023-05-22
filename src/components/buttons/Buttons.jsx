import { Fragment } from "react";
import { ButtonCreator } from "src/components/buttonCreator/ButtonCreator";
import {
  ICON_MARK,
  ICON_PEN,
  ICON_BIN,
  ALT_MARK_TEXT,
  ALT_EDIT_TEXT,
  ALT_DELETE_TEXT,
} from "src/utils/constants/constants";

const Buttons = () => {
  return (
    <Fragment>
      <ButtonCreator icon={ICON_MARK} altText={ALT_MARK_TEXT} />
      <ButtonCreator icon={ICON_PEN} altText={ALT_EDIT_TEXT} />
      <ButtonCreator icon={ICON_BIN} altText={ALT_DELETE_TEXT} />
    </Fragment>
  );
};

export default Buttons;
