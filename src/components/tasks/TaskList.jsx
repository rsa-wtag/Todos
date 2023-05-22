import { useSelector } from "react-redux";
import TaskBoard from "src/components/taskItem/TaskItem";
import "src/components/tasks/TaskList.component.scss";

const TaskList = () => {
  const tasks = useSelector((state) => state.todos);

  return (
    <ul className="task-list">
      {tasks.map((task) => {
        return <TaskBoard key={task.id} task={task} />;
      })}
    </ul>
  );
};

export default TaskList;
