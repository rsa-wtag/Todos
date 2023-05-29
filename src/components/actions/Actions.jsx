import { useDispatch } from "react-redux";
import { Fragment } from "react";
import PropTypes from "prop-types";
import Button from "src/components/button/Button";
import { deleteTask } from "src/store/actions/taskActions";
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

const Actions = (taskId) => {
  const icons = [ICON_MARK, ICON_PEN, ICON_BIN];
  const altTexts = [ALT_MARK_TEXT, ALT_EDIT_TEXT, ALT_DELETE_TEXT];
  const clickFunctions = [() => {}, () => {}, onDeleteTask];
  const dispatch = useDispatch();

  function onDeleteTask() {
    dispatch(deleteTask(taskId.taskId));
  }

  return (
    <Fragment>
      {icons.map((iconSrc, index) => (
        <Button
          key={index}
          iconSrc={iconSrc}
          altText={altTexts[index]}
          onButtonClick={clickFunctions[index]}
        />
      ))}
    </Fragment>
  );
};

Actions.propTypes = {
  taskId: PropTypes.string.isRequired,
};

export default Actions;
