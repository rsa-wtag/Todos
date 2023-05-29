import PropTypes from "prop-types";
import Actions from "src/components/actions/Actions";
import { CLASS_TASK_LIST_ITEM } from "src/utils/constants/classNames";
import styles from "src/components/taskItem/TaskItem.module.scss";

const TaskItem = ({ task }) => {
  return (
    <div className={styles[CLASS_TASK_LIST_ITEM]}>
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
  }),
};

export default TaskItem;
