import { useDispatch } from "react-redux";
import { Fragment } from "react";
import PropTypes from "prop-types";
import { Button } from "src/components/button/Button";
import { deleteTask, taskDone } from "src/store/actions/taskActions";
import {
  ICON_MARK,
  ICON_PEN,
  ICON_BIN,
  ALT_MARK_TEXT,
  ALT_EDIT_TEXT,
  ALT_DELETE_TEXT,
} from "src/utils/constants/constants";

const Actions = (taskId) => {
  const dispatch = useDispatch();

  function onDeleteTask() {
    dispatch(deleteTask(taskId.taskId));
  }

  function onTaskDone() {
    dispatch(taskDone(taskId.taskId));
  }

  return (
    <Fragment>
      <Button
        iconSrc={ICON_MARK}
        altText={ALT_MARK_TEXT}
        onButtonClick={onTaskDone}
      />
      <Button iconSrc={ICON_PEN} altText={ALT_EDIT_TEXT} />
      <Button
        iconSrc={ICON_BIN}
        altText={ALT_DELETE_TEXT}
        onButtonClick={onDeleteTask}
      />
    </Fragment>
  );
};

Actions.propTypes = {
  taskId: PropTypes.string.isRequired,
};

export default Actions;
