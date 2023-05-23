import { useDispatch } from "react-redux";
import { Fragment } from "react";
import PropTypes from "prop-types";
import { Button } from "src/components/button/Button";
import { deleteTask, editTask, taskDone } from "src/store/actions/taskActions";
import {
  ICON_MARK,
  ICON_PEN,
  ICON_BIN,
  ALT_MARK_TEXT,
  ALT_EDIT_TEXT,
  ALT_DELETE_TEXT,
} from "src/utils/constants/constants";

const Actions = ({ task, changeEditableState }) => {
  const dispatch = useDispatch();

  function onDeleteTask() {
    dispatch(deleteTask(task.id));
  }

  function onTaskDone() {
    dispatch(taskDone(task.id));
  }

  return (
    <Fragment>
      {task.isCompleted || (
        <div>
          <Button
            iconSrc={ICON_MARK}
            altText={ALT_MARK_TEXT}
            onButtonClick={onTaskDone}
          />
          <Button
            iconSrc={ICON_PEN}
            altText={ALT_EDIT_TEXT}
            onButtonClick={changeEditableState}
          />
        </div>
      )}
      <Button
        iconSrc={ICON_BIN}
        altText={ALT_DELETE_TEXT}
        onButtonClick={onDeleteTask}
      />
      {task.isCompleted && (
        <div>
          <span>Completed in {task.daysToComplete} day</span>
        </div>
      )}
    </Fragment>
  );
};

Actions.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    createdAt: PropTypes.string,
  }),
};

export default Actions;
