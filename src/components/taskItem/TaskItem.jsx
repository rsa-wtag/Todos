import PropTypes from "prop-types";
import Actions from "src/components/actions/Actions";

const TaskItem = ({ task }) => {
  return (
    <div key={task.id} className="task-list__item">
      <h3>{task.title}</h3>
      <p>Created At: {task.createdAt}</p>
      <Actions />
    </div>
  );
};

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
};

export default TaskItem;
