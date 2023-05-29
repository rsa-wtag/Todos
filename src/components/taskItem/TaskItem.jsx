import PropTypes from "prop-types";
import Actions from "src/components/actions/Actions";
import styles from "src/components/taskItem/TaskItem.module.scss";

const TaskItem = ({ task }) => {
  return (
    <div className={styles["task-list__item"]}>
      <h3>{task.title}</h3>
      <p>Created At: {task.createdAt}</p>
      <Actions taskId={task.id} />
    </div>
  );
};

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  }),
};

export default TaskItem;
