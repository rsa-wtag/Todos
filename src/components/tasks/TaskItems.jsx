import { useSelector } from "react-redux";
import "src/components/tasks/TaskItems.component.scss";
import Buttons from "src/components/buttons/Buttons";

const TaskItems = () => {
  const tasks = useSelector((state) => state.todos);

  return (
    <ul className="task-list">
      {tasks.length > 0 &&
        tasks.map((task) => {
          return (
            <li key={task.id} className="task-list__item">
              <h3>{task.title}</h3>
              <p>Created At: {task.createdAt}</p>
              <Buttons />
            </li>
          );
        })}
    </ul>
  );
};

export default TaskItems;
