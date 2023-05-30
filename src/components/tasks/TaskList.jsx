import { useSelector } from "react-redux";
import TaskItem from "src/components/taskItem/TaskItem";
import styles from "src/components/tasks/TaskList.module.scss";

const TaskList = () => {
  const tasks = useSelector(({ todos }) => todos);

  return (
    <div className={styles["task-list"]}>
      {tasks.map((task) => {
        return <TaskItem key={task.id} task={task} />;
      })}
    </div>
  );
};

export default TaskList;
