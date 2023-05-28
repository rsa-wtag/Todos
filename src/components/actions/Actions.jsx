import { Fragment } from "react";
import Button from "src/components/button/Button";
import {
  ICON_MARK,
  ICON_PEN,
  ICON_BIN,
  ALT_MARK_TEXT,
  ALT_EDIT_TEXT,
  ALT_DELETE_TEXT,
} from "src/utils/constants/constants";

const Actions = () => {
  return (
    <Fragment>
      <Button iconSrc={ICON_MARK} altText={ALT_MARK_TEXT} />
      <Button iconSrc={ICON_PEN} altText={ALT_EDIT_TEXT} />
      <Button iconSrc={ICON_BIN} altText={ALT_DELETE_TEXT} />
    </Fragment>
  );
};

export default Actions;
