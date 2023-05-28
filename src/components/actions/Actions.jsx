import { useDispatch, useSelector } from "react-redux";
import { Fragment } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
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
import { setNumOfVisibleTasks } from "src/store/actions/numOfVisibleTaskAction";

const Actions = ({ task, changeEditableState }) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todos);
  const numOfVisibleTasks = useSelector(
    (state) => state.numOfVisibleTasks.numOfVisibleTasks
  );

  function onDeleteTask() {
    dispatch(deleteTask(task.id));
    dispatch(
      setNumOfVisibleTasks(Math.min(tasks.length - 1, numOfVisibleTasks))
    );
    toast.success("Card deleted successfully!", { autoClose: 2000 });
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
