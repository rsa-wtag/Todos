import { useSelector } from "react-redux";
import "src/components/tasks/TaskItems.component.scss";
import Buttons from "src/components/buttons/Buttons";

const TaskItems = () => {
  const tasks = useSelector((state) => state.todos);
  const sortedTasks = [...tasks].reverse();

  return (
    <ul className="task-list">
      {sortedTasks.length > 0 &&
        sortedTasks.map((task) => {
          return (
            <li key={task.id} className="task-list__item">
              <h3>{task.content}</h3>
              <p>Created At: {task.createdAt}</p>
              <Buttons />
            </li>
          );
        })}
    </ul>
  );
};

export default TaskItems;
