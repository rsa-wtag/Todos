import { useSelector } from "react-redux";
import "src/components/tasks/TaskItems.component.scss";
import TaskBoard from "src/components/TaskBoard/TaskBoard";

const TaskItems = () => {
  const tasks = useSelector((state) => state.todos);

  return (
    <ul className="task-list">
      {tasks.map((task) => {
        return <TaskBoard key={task.id} task={task} />;
      })}
    </ul>
  );
};

export default TaskItems;
