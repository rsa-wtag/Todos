import { Fragment } from "react";
import Button from "src/components/button/Button";
import {
  ALT_MARK_TEXT,
  ALT_EDIT_TEXT,
  ALT_DELETE_TEXT,
} from "src/utils/constants/altTexts";
import {
  ICON_MARK,
  ICON_PEN,
  ICON_BIN,
} from "src/utils/constants/imageSources";

const Actions = () => {
  const icons = [ICON_MARK, ICON_PEN, ICON_BIN];
  const altTexts = [ALT_MARK_TEXT, ALT_EDIT_TEXT, ALT_DELETE_TEXT];
  return (
    <Fragment>
      {icons.map((iconSrc, index) => (
        <Button key={index} iconSrc={iconSrc} altText={altTexts[index]} />
      ))}
    </Fragment>
  );
};

export default Actions;
