import { useState } from "react";
import PropTypes from "prop-types";
import Actions from "src/components/actions/Actions";
import EditableTask from "../editableTask/EditableTask";

const TaskItem = ({ task }) => {
  const [editableState, SetEditableState] = useState(false);

  function changeEditableState() {
    SetEditableState(!editableState);
  }

  return (
    <div className="task-list__item">
      {editableState ? (
        <EditableTask task={task} changeEditableState={changeEditableState} />
      ) : (
        <div>
          <h3
            className={task.isCompleted ? "task-list__item--completed" : null}
          >
            {task.title}
          </h3>
          <p>Created At: {task.createdAt}</p>
          <Actions task={task} changeEditableState={changeEditableState} />
        </div>
      )}
    </div>
  );
};

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    createdAt: PropTypes.string,
  }),
};

export default TaskItem;
