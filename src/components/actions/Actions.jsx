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
  const buttonProps = [
    { iconSrc: ICON_MARK, altText: ALT_MARK_TEXT },
    { iconSrc: ICON_PEN, altText: ALT_EDIT_TEXT },
    {
      iconSrc: ICON_BIN,
      altText: ALT_DELETE_TEXT,
      clickFunction: onDeleteTask,
    },
  ];
  const dispatch = useDispatch();

  function onDeleteTask() {
    dispatch(deleteTask(taskId.taskId));
  }

  return (
    <Fragment>
      {buttonProps.map(({ iconSrc, altText, clickFunction }, index) => (
        <Button
          key={index}
          iconSrc={iconSrc}
          altText={altText}
          onButtonClick={clickFunction}
        />
      ))}
    </Fragment>
  );
};

Actions.propTypes = {
  taskId: PropTypes.string.isRequired,
};

export default Actions;
