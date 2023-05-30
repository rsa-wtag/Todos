import PropTypes from "prop-types";
import Actions from "src/components/actions/Actions";
import classNames from "classnames";
import styles from "src/components/taskItem/TaskItem.module.scss";

const TaskItem = ({ task }) => {
  const itemClassName = classNames({
    [styles["task-list__item--completed"]]: task.isCompleted,
  });

  return (
    <div className={styles["task-list__item"]}>
      <h3 className={itemClassName}>{task.title}</h3>
      <p>Created At: {task.createdAt}</p>
      <Actions task={task} />
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
