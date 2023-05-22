import { useDispatch } from "react-redux";
import { Fragment } from "react";
import PropTypes from "prop-types";
import { Button } from "src/components/button/Button";
import { deleteTask } from "src/store/actions/taskActions";
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

  return (
    <Fragment>
      <Button iconSrc={ICON_MARK} altText={ALT_MARK_TEXT} />
      <Button iconSrc={ICON_PEN} altText={ALT_EDIT_TEXT} />
      <Button
        onButtonClick={onDeleteTask}
        iconSrc={ICON_BIN}
        altText={ALT_DELETE_TEXT}
      />
    </Fragment>
  );
};

Actions.propTypes = {
  taskId: PropTypes.object.isRequired,
};

export default Actions;
