import { useSelector } from "react-redux";
import TaskItem from "src/components/taskItem/TaskItem";
import { CLASS_TASK_LIST } from "src/utils/constants/classNames";
import styles from "src/components/tasks/TaskList.module.scss";

const TaskList = () => {
  const tasks = useSelector((state) => state.todos);

  return (
    <div className={styles[CLASS_TASK_LIST]}>
      {tasks.map((task) => {
        return <TaskItem key={task.id} task={task} />;
      })}
    </div>
  );
};

export default TaskList;
