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

const Actions = (task) => {
  console.log(task);
  const dispatch = useDispatch();

  function onDeleteTask() {
    dispatch(deleteTask(task.task.id));
  }

  function onTaskDone() {
    dispatch(taskDone(task.task.id));
  }

  return (
    <Fragment>
      {task.task.isCompleted || (
        <div>
          <Button
            iconSrc={ICON_MARK}
            altText={ALT_MARK_TEXT}
            onButtonClick={onTaskDone}
          />
          <Button iconSrc={ICON_PEN} altText={ALT_EDIT_TEXT} />
        </div>
      )}
      <Button
        iconSrc={ICON_BIN}
        altText={ALT_DELETE_TEXT}
        onButtonClick={onDeleteTask}
      />
      {task.task.isCompleted && (
        <div>
          <span>Completed in {task.task.daysToComplete} day</span>
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
