import PropTypes from "prop-types";
import Actions from "src/components/actions/Actions";

const TaskItem = ({ task }) => {
  return (
    <div className="task-list__item">
      <h3>{task.title}</h3>
      <p>Created At: {task.createdAt}</p>
      <Actions />
    </div>
  );
};

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
  }),
};

export default TaskItem;
