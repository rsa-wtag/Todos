import { useSelector } from "react-redux";
import "src/components/tasks/TaskItems.component.scss";
import TaskBoard from "src/components/TaskBoard/TaskBoard";

const TaskItems = () => {
  const tasks = useSelector((state) => state.todos);

  return (
    <ul className="task-list">
      {tasks.length > 0 && <TaskBoard tasks={tasks} />}
    </ul>
  );
};

export default TaskItems;
