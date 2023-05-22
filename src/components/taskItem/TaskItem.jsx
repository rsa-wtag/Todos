import Buttons from "src/components/buttons/Buttons";
import PropTypes from "prop-types";

const TaskItem = ({ task }) => {
  return (
    <li key={task.id} className="task-list__item">
      <h3>{task.title}</h3>
      <p>Created At: {task.createdAt}</p>
      <Buttons id={task.id} />
    </li>
  );
};

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
};

export default TaskItem;
